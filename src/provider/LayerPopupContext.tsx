import { EEventType } from "@enum";
import { get, uniqueId } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

export interface ILayerResult<T> {
  eventType: EEventType;
  value?: T;
}
export interface ILayerProps<T, TT> {
  onClose: (eventType: EEventType, value?: TT) => void; // 닫기 이벤트
  params?: T; //화면 전달 파라메터
  layerId: string; //layer 고유 아이디
}

interface ILayerMap {
  layer: any;
  key: string;
}

interface ILayerFunction {
  open: <T, TT>(
    // 파라메터 TYPE, 결과 TYPE
    component: React.ComponentType<ILayerProps<T, TT>>,
    params?: T
  ) => Promise<ILayerResult<TT>>;
  close: () => void;
  allClose: () => void;
  indexByCloseNext: (index: number) => void;
  keys: () => string[];
  isActive: (key: string) => boolean;
}

type Props = { children: React.ReactNode };
const LayerPopupContext = React.createContext<{
  layerFunction: ILayerFunction | undefined;
  activeLayer: string;
}>({
  layerFunction: undefined,
  activeLayer: "",
});

const LayerPopupProvider = ({ children }: Props) => {
  const history = useHistory();
  const [layers, setLayers] = useState<ILayerMap[]>([]);

  useEffect(() => {
    // console.log(layers.map((f) => f.key));
  }, [layers]);

  const activeLayer = useMemo(
    () =>
      ((a) => {
        return get(
          layers.find((f, i, l) => i === l.length - 1),
          "key",
          ""
        );
      })(layers),
    [layers]
  );

  const layerFunction: ILayerFunction = {
    open: function <T, TT>(
      ContentComponent: React.ComponentType<ILayerProps<T, TT>>,
      params?: T
    ): Promise<ILayerResult<TT>> {
      return new Promise((resolve, reject) => {
        // console.log(`Layer:OPEN`);
        const key = uniqueId(`Layer-`);
        try {
          const newLayers = layers.concat({
            key,
            layer: (
              <Drawer key={key} open={true} onClose={() => {}}>
                <div className="App fullscreen">
                  <ContentComponent
                    onClose={(eventType: EEventType, value) => {
                      setLayers(layers.filter((f, i) => f.key !== key));
                      resolve({ eventType, value });
                    }}
                    params={params}
                    layerId={key}
                  ></ContentComponent>
                </div>
              </Drawer>
            ),
          });
          setLayers(newLayers);
        } catch {
          setLayers(layers.filter((f, i) => f.key !== key));
          // setGlobalBackFunction();
          resolve({ value: undefined, eventType: EEventType.CANCEL });
        }
      });
    },
    close: () => {
      // 필요시 구현
    },
    //전체 닫기
    allClose: () => {
      setLayers([]);
      history.replace("/login");
    },
    //index이후 레이어 닫기
    indexByCloseNext: (index: number) => {
      setLayers(layers.filter((f, i) => i <= index));
    },
    keys: () => {
      return layers.map((f) => f.key);
    },
    isActive: (key: string) => {
      const lastIndex = layers.length - 1;
      return lastIndex > 0 && layers[lastIndex].key === key;
    },
  };

  return (
    <LayerPopupContext.Provider
      value={{
        layerFunction,
        activeLayer,
      }}
    >
      {children}
      {/* {layers.length > 0 && layers[layers.length - 1]} */}
      {layers.map((f) => f.layer)}
    </LayerPopupContext.Provider>
  );
};

const useLayerFunction = () => {
  const context = React.useContext(LayerPopupContext);
  if (context === undefined || context.layerFunction === undefined) {
    throw new Error(
      "useLayerFunction must be used within a LayerPopupProvider"
    );
  }
  return {
    activeLayer: context.activeLayer,
    layerFunction: context.layerFunction,
  };
};

export { LayerPopupProvider, useLayerFunction };
