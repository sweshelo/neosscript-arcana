import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ArcLayoutInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Arc?: member<number>;
  Offset?: member<number>;
  Separation?: member<number>;
  CenterAtSeparation?: member<boolean>;
  ProportionalSize?: member<boolean>;
  ItemDirection?: member<any>;
}

const ArcLayout: FC<ArcLayoutInput> = (props: ArcLayoutInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Arc,
    Offset,
    Separation,
    CenterAtSeparation,
    ProportionalSize,
    ItemDirection,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ArcLayout"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Arc"
        content={Arc} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Offset"
        content={Offset} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Separation"
        content={Separation} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="CenterAtSeparation"
        content={CenterAtSeparation} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ProportionalSize"
        content={ProportionalSize} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.ArcLayout+Direction]"
        name="ItemDirection"
        content={ItemDirection} /* default: Clockwise */
      />
    </component>
  );
};

export default ArcLayout;
