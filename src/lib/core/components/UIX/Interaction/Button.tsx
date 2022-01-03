import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  BaseColor?: member<any>;
  __legacy_NormalColor?: member<any>;
  __legacy_HighlightColor?: member<any>;
  __legacy_PressColor?: member<any>;
  __legacy_DisabledColor?: member<any>;
  __legacy_TintColorMode?: member<any>;
  __legacy_ColorDrive?: member<any>;
  IsPressed?: member<boolean>;
  IsHovering?: member<boolean>;
  HoverVibrate?: member<any>;
  PressVibrate?: member<any>;
  ClearFocusOnPress?: member<boolean>;
  PassThroughHorizontalMovement?: member<boolean>;
  PassThroughVerticalMovement?: member<boolean>;
  RequireLockInToPress?: member<boolean>;
  RequireInitialPress?: member<boolean>;
  PressPoint?: member<any>;
  Pressed?: member<any>;
  Pressing?: member<any>;
  Released?: member<any>;
  HoverEnter?: member<any>;
  HoverStay?: member<any>;
  HoverLeave?: member<any>;
}

const Button: FC<ButtonInput> = (props: ButtonInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    BaseColor,
    __legacy_NormalColor,
    __legacy_HighlightColor,
    __legacy_PressColor,
    __legacy_DisabledColor,
    __legacy_TintColorMode,
    __legacy_ColorDrive,
    IsPressed,
    IsHovering,
    HoverVibrate,
    PressVibrate,
    ClearFocusOnPress,
    PassThroughHorizontalMovement,
    PassThroughVerticalMovement,
    RequireLockInToPress,
    RequireInitialPress,
    PressPoint,
    Pressed,
    Pressing,
    Released,
    HoverEnter,
    HoverStay,
    HoverLeave,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.Button"
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
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="BaseColor"
        content={BaseColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_NormalColor"
        content={__legacy_NormalColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_HighlightColor"
        content={__legacy_HighlightColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_PressColor"
        content={__legacy_PressColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_DisabledColor"
        content={__legacy_DisabledColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.InteractionElement+ColorMode]"
        name="__legacy_TintColorMode"
        content={__legacy_TintColorMode} /* default: Explicit */
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.color]"
        name="__legacy_ColorDrive"
        content={__legacy_ColorDrive} /* default: ID0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="IsPressed"
        content={IsPressed} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="IsHovering"
        content={IsHovering} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.VibratePreset]"
        name="HoverVibrate"
        content={HoverVibrate} /* default: None */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.VibratePreset]"
        name="PressVibrate"
        content={PressVibrate} /* default: None */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ClearFocusOnPress"
        content={ClearFocusOnPress} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PassThroughHorizontalMovement"
        content={PassThroughHorizontalMovement} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PassThroughVerticalMovement"
        content={PassThroughVerticalMovement} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="RequireLockInToPress"
        content={RequireLockInToPress} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="RequireInitialPress"
        content={RequireInitialPress} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="PressPoint"
        content={PressPoint} /* default: [0; 0] */
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="Pressed"
        content={Pressed} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="Pressing"
        content={Pressing} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="Released"
        content={Released} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="HoverEnter"
        content={HoverEnter} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="HoverStay"
        content={HoverStay} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="HoverLeave"
        content={HoverLeave} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default Button;
