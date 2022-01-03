import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface SlideSwapRegionInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  _current?: member<any>;
}

const SlideSwapRegion: FC<SlideSwapRegionInput> = (
  props: SlideSwapRegionInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, _current } = props;

  return (
    <component
      name="FrooxEngine.UIX.SlideSwapRegion"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="_current"
        content={_current}
      />
    </component>
  );
};

export default SlideSwapRegion;