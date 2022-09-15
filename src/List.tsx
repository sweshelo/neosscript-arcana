import React from "react";
import Slot from "lib/core/Slot";
import NeosType from "lib/core/types/NeosType";
import DVSlot from "lib/dv/DVSlot";
import { ArcanaType } from "lib/Arcana/types";
import DynamicVariableSpace from "lib/core/components/Data/Dynamic/DynamicVariableSpace";

export default () => {
  return(
    <Slot name="Card">
      <Slot name="10001"
  components={[
    <DynamicVariableSpace SpaceName="10001" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ブラッドハウンド" },
      { type: NeosType.String, name: "Text", value: "■ダメージブレイク\nこのユニットがオーバークロックした時、対戦相手のユニットを１体選ぶ。それに４０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10002"
  components={[
    <DynamicVariableSpace SpaceName="10002" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ソードファイター" },
      { type: NeosType.String, name: "Text", value: "■アタッカー\nこのユニットがアタックした時、ターン終了時までこのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10003"
  components={[
    <DynamicVariableSpace SpaceName="10003" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "バク・ダルマン" },
      { type: NeosType.String, name: "Text", value: "■ドッカーンッ！\nこのユニットがオーバークロックした時、対戦相手の全てのユニットに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10004"
  components={[
    <DynamicVariableSpace SpaceName="10004" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ランサー" },
      { type: NeosType.String, name: "Text", value: "■ダメージブレイク\nこのユニットがアタックした時、対戦相手のユニットを１体選ぶ。それに１０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10005"
  components={[
    <DynamicVariableSpace SpaceName="10005" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ヘルハウンド" },
      { type: NeosType.String, name: "Text", value: "■トリガーロスト\nこのユニットがフィールドに出た時、対戦相手のトリガーゾーンにあるカードを１枚ランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10006"
  components={[
    <DynamicVariableSpace SpaceName="10006" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "拷問官アーテー" },
      { type: NeosType.String, name: "Text", value: "【スピードムーブ】\n（このユニットはフィールドに出たターンの行動制限の影響を受けない）" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 4000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10007"
  components={[
    <DynamicVariableSpace SpaceName="10007" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ゴライアス" },
      { type: NeosType.String, name: "Text", value: "■マグニボム\nこのユニットがオーバークロックした時、対戦相手に１ライフダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.巨人 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10008"
  components={[
    <DynamicVariableSpace SpaceName="10008" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "バルキリークララ" },
      { type: NeosType.String, name: "Text", value: "■聖女の加護\nこのユニットはブロックされない。（この能力はこのユニットがフィールドに出た時に付与される）" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10009"
  components={[
    <DynamicVariableSpace SpaceName="10009" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "クラブドーザー" },
      { type: NeosType.String, name: "Text", value: "" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10010"
  components={[
    <DynamicVariableSpace SpaceName="10010" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "不知火伍式" },
      { type: NeosType.String, name: "Text", value: "■地獄剣\nこのユニットがアタックした時、あなたは手札を１枚選んで捨てる。そうした場合、ターン終了時までこのユニットのＢＰを＋４０００する。\n■トリガーロスト\nこのユニットがプレイヤーアタックに成功した時、対戦相手のトリガーゾーンにあるカードを２枚までランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.侍 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10101"
  components={[
    <DynamicVariableSpace SpaceName="10101" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "クマゴロウ" },
      { type: NeosType.String, name: "Text", value: "■サポーター\nあなたのターン開始時、あなたのユニットを１体選ぶ。ターン終了時までそれのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10102"
  components={[
    <DynamicVariableSpace SpaceName="10102" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ターボデビル" },
      { type: NeosType.String, name: "Text", value: "【スピードムーブ】\n（このユニットはフィールドに出たターンの行動制限の影響を受けない）\n■アタッカー\nこのユニットがアタックした時、ターン終了時までこのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10103"
  components={[
    <DynamicVariableSpace SpaceName="10103" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "デビルビルダー" },
      { type: NeosType.String, name: "Text", value: "【貫通】\n（このユニットの攻撃は対戦相手のユニットを貫通して対戦相手にライフダメージを与える。この能力はこのユニットがフィールドに出た時に付与される）\n■ビルドアップ\nあなたのユニットがアタックするたび、ターン終了時までこのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.巨人 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11001"
  components={[
    <DynamicVariableSpace SpaceName="11001" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "デビルウィンナー" },
      { type: NeosType.String, name: "Text", value: "■孤独との別れ\nこのユニットがフィールドに出た時、赤属性のユニットカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11002"
  components={[
    <DynamicVariableSpace SpaceName="11002" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダーティークロー" },
      { type: NeosType.String, name: "Text", value: "" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11003"
  components={[
    <DynamicVariableSpace SpaceName="11003" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "風紀委員マコ" },
      { type: NeosType.String, name: "Text", value: "■選略・魔校法度\nこのユニットがフィールドに出た時、以下の効果から１つを選び発動する。\n①：【悪魔】ユニットのカードを１枚ランダムで手札に加える。\n②：あなたのＣＰを－１する。そうした場合、このユニットに【スピードムーブ】を与える。【悪魔】ユニットのカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11004"
  components={[
    <DynamicVariableSpace SpaceName="11004" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "烈火の侍" },
      { type: NeosType.String, name: "Text", value: "【無我の境地】\n（このユニットは対戦相手の効果によって行動権を消費しない。この能力はこのユニットがフィールドに出た時に付与される）\n【固着】\n（このユニットは対戦相手の効果によって手札に戻らない。この能力はこのユニットがフィールドに出た時に付与される）" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.侍 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11005"
  components={[
    <DynamicVariableSpace SpaceName="11005" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "総督者ネビロス" },
      { type: NeosType.String, name: "Text", value: "【スピードムーブ】\n■闘士／悪魔\nこのユニットのＢＰはあなたのフィールドのこのユニット以外の【悪魔】ユニット１体につき＋２０００される。\n■トリガーロスト\nこのユニットがアタックした時、対戦相手のトリガーゾーンにあるカードを１枚ランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11041"
  components={[
    <DynamicVariableSpace SpaceName="11041" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ニードラー" },
      { type: NeosType.String, name: "Text", value: "■オールドプログラム\nこのユニットがフィールドに出た時、あなたの効果を持たないユニットの基本ＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11042"
  components={[
    <DynamicVariableSpace SpaceName="11042" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "チアデビル" },
      { type: NeosType.String, name: "Text", value: "■サポーター／赤\nあなたの赤属性ユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11043"
  components={[
    <DynamicVariableSpace SpaceName="11043" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "デモンズハンター" },
      { type: NeosType.String, name: "Text", value: "■トリガーロスト\nこのユニットがプレイヤーアタックに成功した時、対戦相手のトリガーゾーンにあるカードを１枚ランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11071"
  components={[
    <DynamicVariableSpace SpaceName="11071" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "リトルドラコ" },
      { type: NeosType.String, name: "Text", value: "■援軍／ドラゴン\nこのユニットがフィールドに出た時、【ドラゴン】ユニットのカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11072"
  components={[
    <DynamicVariableSpace SpaceName="11072" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "サラマンダー" },
      { type: NeosType.String, name: "Text", value: "■正統なる血統\nこのユニットのＢＰは＋［あなたのライフ×１０００］される。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11073"
  components={[
    <DynamicVariableSpace SpaceName="11073" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ＩＺＯ" },
      { type: NeosType.String, name: "Text", value: "■人斬りの刀\nこのユニットがアタックした時、ターン終了時までこのユニットのＢＰを＋［あなたの捨札の【侍】の数×２０００］する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.侍 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11074"
  components={[
    <DynamicVariableSpace SpaceName="11074" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "炎鬼イフリート" },
      { type: NeosType.String, name: "Text", value: "■歌舞伎炎舞\nこのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それにあなたのフィールドにいる【侍】１体につき２０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.侍 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10014"
  components={[
    <DynamicVariableSpace SpaceName="10014" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アワだっくん" },
      { type: NeosType.String, name: "Text", value: "■リブート\nこのユニットがフィールドに出た時、あなたの黄属性ユニットを１体選ぶ。それの行動権を回復する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10015"
  components={[
    <DynamicVariableSpace SpaceName="10015" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "サイボーグ僧兵" },
      { type: NeosType.String, name: "Text", value: "■ブロッカー\nこのユニットがブロックした時、ターン終了時までこのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10016"
  components={[
    <DynamicVariableSpace SpaceName="10016" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "金色の狛犬" },
      { type: NeosType.String, name: "Text", value: "■ウェイト\nこのユニットがオーバークロックした時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10017"
  components={[
    <DynamicVariableSpace SpaceName="10017" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "湖畔のアリエ" },
      { type: NeosType.String, name: "Text", value: "■ウェイト\nこのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10018"
  components={[
    <DynamicVariableSpace SpaceName="10018" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ヤシオノトクリ" },
      { type: NeosType.String, name: "Text", value: "■ダメージブレイク\nこのユニットがフィールドに出た時、対戦相手の行動済ユニットを１体選ぶ。それに４０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10019"
  components={[
    <DynamicVariableSpace SpaceName="10019" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ジャンプー" },
      { type: NeosType.String, name: "Text", value: "■ジャンプーダンス\nこのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それを対戦相手の手札に戻す。（手札が上限を超える場合、捨札に送られる）" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10020"
  components={[
    <DynamicVariableSpace SpaceName="10020" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "カイム" },
      { type: NeosType.String, name: "Text", value: "■トリガードロー\nこのユニットがフィールドに出た時、あなたはトリガーカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.魔導士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10021"
  components={[
    <DynamicVariableSpace SpaceName="10021" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "護符剣士ライマル" },
      { type: NeosType.String, name: "Text", value: "【不屈】\n（あなたのターン終了時、このユニットの行動権を回復する。この能力はこのユニットがフィールドに出た時に付与される）" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10022"
  components={[
    <DynamicVariableSpace SpaceName="10022" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ルインガーディアン" },
      { type: NeosType.String, name: "Text", value: "■ブロッカー\nこのユニットがブロックした時、ターン終了時までこのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10023"
  components={[
    <DynamicVariableSpace SpaceName="10023" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ラグエル" },
      { type: NeosType.String, name: "Text", value: "■ハードマシンガン\nこのユニットがフィールドに出た時、対戦相手の全ての行動済ユニットに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.天使 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10105"
  components={[
    <DynamicVariableSpace SpaceName="10105" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ホーローセン" },
      { type: NeosType.String, name: "Text", value: "■トリガードロー\nこのユニットがアタックした時、あなたはトリガーカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10106"
  components={[
    <DynamicVariableSpace SpaceName="10106" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "シルフの戦士" },
      { type: NeosType.String, name: "Text", value: "■リターン\nこのユニットがプレイヤーアタックに成功した時、対戦相手のレベル２以上のユニットを１体選ぶ。それを対戦相手の手札に戻す。（手札が上限を超える場合、捨札に送られる）" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10107"
  components={[
    <DynamicVariableSpace SpaceName="10107" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "フィフティニー" },
      { type: NeosType.String, name: "Text", value: "■戒めの矢\nこのユニットが戦闘した時、ターン終了時までこのユニットのＢＰを＋２０００する。この効果が発動した時、戦闘終了時までお互いのプレイヤーは全ての効果を発動できない。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11007"
  components={[
    <DynamicVariableSpace SpaceName="11007" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "カパエル" },
      { type: NeosType.String, name: "Text", value: "■援軍／黄\nこのユニットがフィールドに出た時、黄属性のユニットカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11008"
  components={[
    <DynamicVariableSpace SpaceName="11008" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "プリティベル" },
      { type: NeosType.String, name: "Text", value: "■援軍／精霊\nこのユニットがフィールドに出た時、【精霊】ユニットのカードを１枚ランダムで手札に加える。\n■平和の光\nあなたのターン終了時、対戦相手のユニットからランダムで１体に【呪縛】を与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11009"
  components={[
    <DynamicVariableSpace SpaceName="11009" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ストライクナース" },
      { type: NeosType.String, name: "Text", value: "■援軍／天使\nこのユニットがフィールドに出た時、【天使】ユニットのカードを１枚ランダムで手札に加える。\n■サポーター／天使\nあなたの【天使】ユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.天使 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11010"
  components={[
    <DynamicVariableSpace SpaceName="11010" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "麒麟" },
      { type: NeosType.String, name: "Text", value: "【加護】\n（このユニットは効果に選ばれない。この能力はこのユニットがフィールドに出た時に付与される）\n【次元干渉／コスト３】\n（このユニットはコスト３以上のユニットにブロックされない。この能力はこのユニットがフィールドに出た時に付与される）" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.神獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11011"
  components={[
    <DynamicVariableSpace SpaceName="11011" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "聖天使ニケ" },
      { type: NeosType.String, name: "Text", value: "【加護】\n■インフィニティーバースト\nこのユニットがアタックした時、あなたのユニットを１体選ぶ。それの行動権を回復する。\n■エンジェリックシールド\nあなたのライフが６以下の時、あなたの【天使】ユニットに【加護】を与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.天使 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11045"
  components={[
    <DynamicVariableSpace SpaceName="11045" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "キラーヴィーナス" },
      { type: NeosType.String, name: "Text", value: "■ウェイト\nこのユニットがフィールドに出た時、あなたのフィールドに【機械】ユニットが３体以上いる場合、対戦相手のユニットを１体選ぶ。それの行動権を消費する。\n■ダメージブレイク\nこのユニットがプレイヤーアタックに成功した時、対戦相手の行動済ユニットを１体選ぶ。それに２０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11046"
  components={[
    <DynamicVariableSpace SpaceName="11046" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "光冠の騎士" },
      { type: NeosType.String, name: "Text", value: "■闘士／精霊・天使\nこのユニットのＢＰは、あなたのフィールドの【精霊】と【天使】１体につき＋２０００される。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11047"
  components={[
    <DynamicVariableSpace SpaceName="11047" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "イカロス" },
      { type: NeosType.String, name: "Text", value: "■ウェイト\nこのユニットがブロックした時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。\n■グロウアップ\nこのユニットがオーバークロックした時、このユニットの基本ＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11075"
  components={[
    <DynamicVariableSpace SpaceName="11075" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ガンスネーク" },
      { type: NeosType.String, name: "Text", value: "" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11076"
  components={[
    <DynamicVariableSpace SpaceName="11076" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "月夜のオデット" },
      { type: NeosType.String, name: "Text", value: "■リターン\nこのユニットがフィールドに出た時、対戦相手の行動済ユニット１体を選ぶ。それを手札に戻す。（手札が上限を超える場合、捨札に送られる）" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11077"
  components={[
    <DynamicVariableSpace SpaceName="11077" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "陽炎弐式" },
      { type: NeosType.String, name: "Text", value: "■極楽剣\nこのユニットがブロックした時、あなたは手札を２枚選んで捨てる。そうした場合、戦闘中の相手ユニットを対戦相手の手札に戻す。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.侍 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11078"
  components={[
    <DynamicVariableSpace SpaceName="11078" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アメノウズメ" },
      { type: NeosType.String, name: "Text", value: "■サポーター／黄\nあなたの黄属性ユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.舞姫 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11079"
  components={[
    <DynamicVariableSpace SpaceName="11079" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アルテミス" },
      { type: NeosType.String, name: "Text", value: "【次元干渉／コスト３】\n（このユニットはコスト３以上のユニットにブロックされない。この能力はこのユニットがフィールドに出た時に付与される）\n■浄化の聖弓\nこのユニットがプレイヤーアタックに成功した時、対戦相手の行動済ユニットを１体選ぶ。それを消滅させる。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.神 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10027"
  components={[
    <DynamicVariableSpace SpaceName="10027" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ミイラくん" },
      { type: NeosType.String, name: "Text", value: "■ロスト\nこのユニットが破壊された時、対戦相手は手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10028"
  components={[
    <DynamicVariableSpace SpaceName="10028" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "スカルウォーカー" },
      { type: NeosType.String, name: "Text", value: "■リバイブ\nこのユニットが破壊された時、あなたの捨札にあるユニットカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10029"
  components={[
    <DynamicVariableSpace SpaceName="10029" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "カラスマドウ" },
      { type: NeosType.String, name: "Text", value: "■インターセプトドロー\nこのユニットが破壊された時、あなたはインターセプトカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10030"
  components={[
    <DynamicVariableSpace SpaceName="10030" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ドン・ペロッツァーノ" },
      { type: NeosType.String, name: "Text", value: "■デリート\nこのユニットがオーバークロックした時、対戦相手のレベル２以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10031"
  components={[
    <DynamicVariableSpace SpaceName="10031" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "見習い魔導士リーナ" },
      { type: NeosType.String, name: "Text", value: "■リバイブ\nこのユニットがオーバークロックした時、あなたの捨札にあるカードを１枚選ぶ。それを手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.魔導士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10032"
  components={[
    <DynamicVariableSpace SpaceName="10032" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "中忍月影" },
      { type: NeosType.String, name: "Text", value: "■ロスト\nこのユニットがプレイヤーアタックに成功した時、対戦相手は手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.忍者 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10033"
  components={[
    <DynamicVariableSpace SpaceName="10033" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ヴァイパー" },
      { type: NeosType.String, name: "Text", value: "■リバイブ\nこのユニットがフィールドに出た時、あなたの捨札にあるユニットカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10034"
  components={[
    <DynamicVariableSpace SpaceName="10034" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ガシャドクロ" },
      { type: NeosType.String, name: "Text", value: "■死への誘い\nこのユニットが破壊された時、対戦相手に１ライフダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10036"
  components={[
    <DynamicVariableSpace SpaceName="10036" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "フレスベルグ" },
      { type: NeosType.String, name: "Text", value: "■デリート\nこのユニットがプレイヤーアタックに成功した時、対戦相手のレベル２以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10038"
  components={[
    <DynamicVariableSpace SpaceName="10038" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "メガジョー" },
      { type: NeosType.String, name: "Text", value: "■飽食の狩人\nこのユニットがフィールドに出た時、あなたのフィールドに赤・黄・青・緑属性のユニットがいる場合、このユニットの基本ＢＰを＋４０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.海洋 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10109"
  components={[
    <DynamicVariableSpace SpaceName="10109" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ユキ・ダルマン" },
      { type: NeosType.String, name: "Text", value: "■ドロー\nあなたのターン終了時、カードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10110"
  components={[
    <DynamicVariableSpace SpaceName="10110" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "青海のドーリス" },
      { type: NeosType.String, name: "Text", value: "■インターセプトドロー\nこのユニットがプレイヤーアタックに成功した時、あなたはインターセプトカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.海洋 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10111"
  components={[
    <DynamicVariableSpace SpaceName="10111" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "バフォメット" },
      { type: NeosType.String, name: "Text", value: "■呪いの怨嗟\nこのユニットがアタックした時、対戦相手のレベル２以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11012"
  components={[
    <DynamicVariableSpace SpaceName="11012" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダークテイマー" },
      { type: NeosType.String, name: "Text", value: "■アナザーデリート\nこのユニットがフィールドに出た時、あなたのユニットを１体選ぶ。それを破壊する。そうした場合、あなたのＣＰを＋２する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11013"
  components={[
    <DynamicVariableSpace SpaceName="11013" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "黒ずきんちゃん" },
      { type: NeosType.String, name: "Text", value: "■ロスト\nこのユニットがアタックした時、お互いのプレイヤーは手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11014"
  components={[
    <DynamicVariableSpace SpaceName="11014" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ヘカテー" },
      { type: NeosType.String, name: "Text", value: "■マジック・クロック\nあなたのターン開始時、ユニットを１体選ぶ。それのレベルを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.魔導士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11015"
  components={[
    <DynamicVariableSpace SpaceName="11015" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "デスクラウン" },
      { type: NeosType.String, name: "Text", value: "■デリート\nこのユニットがフィールドに出た時、対戦相手のレベル２以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.魔導士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11016"
  components={[
    <DynamicVariableSpace SpaceName="11016" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ケルピー" },
      { type: NeosType.String, name: "Text", value: "■二十四の白昼夢\nこのユニットがプレイヤーアタックに成功した時、フィールドにいる全てのユニットをお互いのプレイヤーのデッキから消滅させる。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11049"
  components={[
    <DynamicVariableSpace SpaceName="11049" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "スピードシャーク" },
      { type: NeosType.String, name: "Text", value: "■サポーター／機械\nあなたの【機械】ユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11050"
  components={[
    <DynamicVariableSpace SpaceName="11050" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "雪忍の六花" },
      { type: NeosType.String, name: "Text", value: "■援軍／忍者\nこのユニットがフィールドに出た時、【忍者】ユニットのカードを１枚ランダムで手札に加える。\n■忍法・雪遁の術\nこのユニットが戦闘した時、あなたのフィールドにユニットが４体以下の場合、このユニットを【複製】し、破壊する。【複製】されたユニットに【沈黙】を与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.忍者 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11051"
  components={[
    <DynamicVariableSpace SpaceName="11051" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "エリゴール" },
      { type: NeosType.String, name: "Text", value: "■闘士／不死\nこのユニットのＢＰは、あなたのフィールドの【不死】ユニット１体につき＋２０００される。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11052"
  components={[
    <DynamicVariableSpace SpaceName="11052" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "マッドシスター" },
      { type: NeosType.String, name: "Text", value: "■狂乱の宴\nこのユニットが戦闘した時、戦闘中の相手ユニットがレベル２以上だった場合、それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.魔導士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11080"
  components={[
    <DynamicVariableSpace SpaceName="11080" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "見習いシーフ" },
      { type: NeosType.String, name: "Text", value: "■ロスト\nこのユニットがフィールドに出た時、対戦相手は手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.盗賊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11081"
  components={[
    <DynamicVariableSpace SpaceName="11081" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ファントム" },
      { type: NeosType.String, name: "Text", value: "■デリート\nこのユニットがフィールドに出た時、対戦相手のＢＰ８０００以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11082"
  components={[
    <DynamicVariableSpace SpaceName="11082" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ドラグーン・レイア" },
      { type: NeosType.String, name: "Text", value: "【スピードムーブ】\n■システムΣ\n対戦相手の手札が２枚以下の時、このユニットのＢＰを＋５０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11083"
  components={[
    <DynamicVariableSpace SpaceName="11083" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "魔将・信玄" },
      { type: NeosType.String, name: "Text", value: "【不屈】\n【不滅】\n■魂の代償\nあなたのターン終了時、あなたは１ライフダメージを受ける。（この効果によって受けたライフダメージでジョーカーゲージは増えない）" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10040"
  components={[
    <DynamicVariableSpace SpaceName="10040" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ハッパロイド" },
      { type: NeosType.String, name: "Text", value: "■ドロー\nこのユニットがフィールドに出た時、あなたはカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10041"
  components={[
    <DynamicVariableSpace SpaceName="10041" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "フォクスコマンドー" },
      { type: NeosType.String, name: "Text", value: "■チェンジ\nこのユニットがオーバークロックした時、あなたは手札を２枚選んで捨てる。そうした場合、あなたはカードを２枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10042"
  components={[
    <DynamicVariableSpace SpaceName="10042" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ケロール・キッド" },
      { type: NeosType.String, name: "Text", value: "■ウィークネス\nこのユニットがオーバークロックした時、対戦相手のユニットを１体選ぶ。それの基本ＢＰを－３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10043"
  components={[
    <DynamicVariableSpace SpaceName="10043" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "グラインドビートル" },
      { type: NeosType.String, name: "Text", value: "■チャージ\nこのユニットがフィールドに出た時、あなたのＣＰを＋２する。\n■連撃・グラインドドロー\nこのユニットがフィールドに出た時、このターンにあなたがこのユニット以外のコスト２以上の緑属性のカードを使用している場合、あなたはカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10044"
  components={[
    <DynamicVariableSpace SpaceName="10044" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "キャットムル" },
      { type: NeosType.String, name: "Text", value: "【不屈】\n（あなたのターン終了時、このユニットの行動権を回復する。この能力はこのユニットがフィールドに出た時に付与される）" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10045"
  components={[
    <DynamicVariableSpace SpaceName="10045" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "リーフィア" },
      { type: NeosType.String, name: "Text", value: "■ブロッカー\nこのユニットがブロックした時、ターン終了時までこのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10046"
  components={[
    <DynamicVariableSpace SpaceName="10046" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "バブレスウルフィン" },
      { type: NeosType.String, name: "Text", value: "【貫通】\n（このユニットの攻撃は対戦相手のユニットを貫通して対戦相手にライフダメージを与える。この能力はこのユニットがフィールドに出た時に付与される）\n■野生の解放\nこのユニットが戦闘した時、ターン終了時までこのユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10047"
  components={[
    <DynamicVariableSpace SpaceName="10047" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダルタニャン" },
      { type: NeosType.String, name: "Text", value: "■チャージ\nこのユニットがフィールドに出た時、あなたのＣＰを＋２する。\n■ドロー\nこのユニットがアタックした時、あなたはカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10048"
  components={[
    <DynamicVariableSpace SpaceName="10048" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ギガマムート" },
      { type: NeosType.String, name: "Text", value: "【不屈】\n（あなたのターン終了時、このユニットの行動権を回復する。この能力はこのユニットがフィールドに出た時に付与される）" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10050"
  components={[
    <DynamicVariableSpace SpaceName="10050" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "鬼ブル" },
      { type: NeosType.String, name: "Text", value: "■無条件移動\nこのユニットがアタックした時、このユニットの基本ＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.巨人 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10113"
  components={[
    <DynamicVariableSpace SpaceName="10113" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ポメの富士" },
      { type: NeosType.String, name: "Text", value: "■大金星\nこのユニットが戦闘した時、戦闘中の相手ユニットよりこのユニットのＢＰが低い場合、ターン終了までこのユニットのＢＰを＋５０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10114"
  components={[
    <DynamicVariableSpace SpaceName="10114" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ＫＰ" },
      { type: NeosType.String, name: "Text", value: "■天変地異\nこのユニットがオーバークロックした時、全てのユニットをお互いのプレイヤーの手札に戻す。（手札が上限を超える場合、捨札に送られる）" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10115"
  components={[
    <DynamicVariableSpace SpaceName="10115" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "クマティーナ" },
      { type: NeosType.String, name: "Text", value: "■グロウアップ\nこのユニットがブロックした時、このユニットの基本ＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11018"
  components={[
    <DynamicVariableSpace SpaceName="11018" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ブロックナイト" },
      { type: NeosType.String, name: "Text", value: "■援軍／緑\nこのユニットがフィールドに出た時、緑属性のユニットカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 1000, 2000, 3000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11019"
  components={[
    <DynamicVariableSpace SpaceName="11019" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "スポアガール" },
      { type: NeosType.String, name: "Text", value: "■援軍／珍獣\nこのユニットがフィールドに出た時、【珍獣】ユニットのカードを１枚ランダムで手札に加える。\n■サポーター／珍獣\nあなたの【珍獣】ユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.精霊 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11020"
  components={[
    <DynamicVariableSpace SpaceName="11020" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ハントレス" },
      { type: NeosType.String, name: "Text", value: "■チャージ\nこのユニットがプレイヤーアタックに成功した時、あなたのＣＰを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11021"
  components={[
    <DynamicVariableSpace SpaceName="11021" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アントワネット" },
      { type: NeosType.String, name: "Text", value: "■サポーター／緑\nあなたの緑属性ユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.舞姫 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11022"
  components={[
    <DynamicVariableSpace SpaceName="11022" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "心眼のナギ" },
      { type: NeosType.String, name: "Text", value: "■援軍／侍\nこのユニットがフィールドに出た時、【侍】ユニットのカードを１枚ランダムで手札に加える。\n■心眼の撫子\nあなたの【侍】ユニットに【不屈】を与える。\nあなたの【侍】ユニットが戦闘した時、そのユニットの基本ＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.侍 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11053"
  components={[
    <DynamicVariableSpace SpaceName="11053" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ローグソルジャー" },
      { type: NeosType.String, name: "Text", value: "■チャージ\nこのユニットが戦闘に勝利した時、あなたのＣＰを＋２する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11054"
  components={[
    <DynamicVariableSpace SpaceName="11054" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ギャウルス" },
      { type: NeosType.String, name: "Text", value: "■援軍／ドラゴン\nこのユニットがフィールドに出た時、【ドラゴン】ユニットのカードを１枚ランダムで手札に加える。\n■繋がれる竜の血\nこのユニットが破壊された時、あなたの手札にある【ドラゴン】ユニットのカードからランダムで１枚のコストを－１する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 2000, 3000, 4000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11055"
  components={[
    <DynamicVariableSpace SpaceName="11055" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ホワイトバニー" },
      { type: NeosType.String, name: "Text", value: "■チャージダンス\nあなたのユニットが戦闘に勝利するたび、あなたのＣＰを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.舞姫 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11056"
  components={[
    <DynamicVariableSpace SpaceName="11056" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ディオーネ" },
      { type: NeosType.String, name: "Text", value: "■闘士／戦士\nこのユニットのＢＰは、あなたのフィールドの【戦士】ユニット１体につき＋２０００される。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.戦士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11084"
  components={[
    <DynamicVariableSpace SpaceName="11084" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "スチームバク" },
      { type: NeosType.String, name: "Text", value: "■チャージ\n対戦相手のターン開始時、あなたのＣＰを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11085"
  components={[
    <DynamicVariableSpace SpaceName="11085" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "チャイレン" },
      { type: NeosType.String, name: "Text", value: "■珍獣の闘仙術\nこのユニットのＢＰは、あなたのフィールドの【珍獣】１体につき＋１０００される。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.珍獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 3000, 4000, 5000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11086"
  components={[
    <DynamicVariableSpace SpaceName="11086" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ヘラクレス" },
      { type: NeosType.String, name: "Text", value: "【不屈】\n■グロウアップ\nあなたのターン開始時、このユニットの基本ＢＰを＋１０００する。\n■オーバーフロー\nこのユニットがブロックした時、対戦相手のＣＰを－３する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.機械 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10011"
  components={[
    <DynamicVariableSpace SpaceName="10011" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ベヒーモスドラゴン" },
      { type: NeosType.String, name: "Text", value: "■巨躯の鳴動\nこのユニットがアタックした時、ターン終了時までこのユニットのＢＰを＋［あなたの捨札の数×５００］する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10012"
  components={[
    <DynamicVariableSpace SpaceName="10012" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "魔槍のリリム" },
      { type: NeosType.String, name: "Text", value: "■デーモンスピア\nこのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それに４０００ダメージを与える。\n■トリガーロスト\nこのユニットがアタックした時、対戦相手のトリガーゾーンにあるカードを１枚ランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10013"
  components={[
    <DynamicVariableSpace SpaceName="10013" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "蛮王ベリアル" },
      { type: NeosType.String, name: "Text", value: "■憤怒の炎\nこのユニットがフィールドに出た時、対戦相手のユニット全体に３０００ダメージを与える。\n■ダメージブレイク\nこのユニットがプレイヤーアタックに成功した時、対戦相手のユニットを１体選ぶ。それに７０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 6 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.巨人 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10104"
  components={[
    <DynamicVariableSpace SpaceName="10104" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アークドラゴン" },
      { type: NeosType.String, name: "Text", value: "■ダークフレア\nこのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それに２００００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 6 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11006"
  components={[
    <DynamicVariableSpace SpaceName="11006" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "裁きのマーヤ" },
      { type: NeosType.String, name: "Text", value: "【消滅効果耐性】\n■煉獄の判決\n対戦相手のユニットのＢＰを－１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11044"
  components={[
    <DynamicVariableSpace SpaceName="11044" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ブレイブドラゴン" },
      { type: NeosType.String, name: "Text", value: "■灼熱の業火\nこのユニットがアタックした時、対戦相手の全てのユニットに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 5 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10024"
  components={[
    <DynamicVariableSpace SpaceName="10024" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "雷龍" },
      { type: NeosType.String, name: "Text", value: "■サンダーボルト\nこのユニットがフィールドに出た時、対戦相手の行動済ユニットを１体選ぶ。それに７０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10025"
  components={[
    <DynamicVariableSpace SpaceName="10025" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "九尾の妖狐" },
      { type: NeosType.String, name: "Text", value: "■九尾の誘惑\nこのユニットがアタックした時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 6000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10026"
  components={[
    <DynamicVariableSpace SpaceName="10026" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "戦神・毘沙門" },
      { type: NeosType.String, name: "Text", value: "■戦神の怒号\nこのユニットがフィールドに出た時、このユニット以外の全てのユニットを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 7 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.神 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10108"
  components={[
    <DynamicVariableSpace SpaceName="10108" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "大天使ミカエル" },
      { type: NeosType.String, name: "Text", value: "■大天使の加護\nこのユニットがフィールドに出た時、あなたの全てのユニットの行動権を回復する。\n■サポーター／天使\nあなたの【天使】ユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 6 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.天使 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11048"
  components={[
    <DynamicVariableSpace SpaceName="11048" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "守神・不動明王" },
      { type: NeosType.String, name: "Text", value: "【破壊効果耐性】\n■不動の呪詛\nこのユニットがフィールドに出た時、対戦相手の全てのユニットに【呪縛】（このユニットはターン開始時に行動権を回復しない）を与える。\n■守神の覇気\n対戦相手のターン開始時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.神 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.巨人 },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10035"
  components={[
    <DynamicVariableSpace SpaceName="10035" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "堕天馬アルゲニブ" },
      { type: NeosType.String, name: "Text", value: "■闇の顕現\nこのユニットがフィールドに出た時、対戦相手のユニットからランダムで１体に【沈黙】を与える。\n■リバイブ\nこのユニットがプレイヤーアタックに成功した時、あなたの捨札にあるカードを１枚選ぶ。それを手札に加える。\n■復興の嘶き\nこのユニットが破壊された時、あなたは【獣】ユニットを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10037"
  components={[
    <DynamicVariableSpace SpaceName="10037" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ユーベル・ヘルメス" },
      { type: NeosType.String, name: "Text", value: "■ソウルブレード\nこのユニットがフィールドに出た時、このユニットの基本ＢＰを＋５０００する。あなたは１ライフダメージを受ける。（この効果によって受けたライフダメージでジョーカーゲージは増えない）\n■ロスト\nこのユニットが破壊された時、対戦相手は手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.悪魔 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 4000, 5000, 6000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10039"
  components={[
    <DynamicVariableSpace SpaceName="10039" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "冥王ハデス" },
      { type: NeosType.String, name: "Text", value: "■血塗られし報復\nこのユニットがフィールドに出た時、対戦相手の全てのレベル２以上のユニットを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10112"
  components={[
    <DynamicVariableSpace SpaceName="10112" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "冥姫ニュクス" },
      { type: NeosType.String, name: "Text", value: "■死者達のワルツ\nこのユニットがフィールドに出た時、あなたの捨札にあるユニットカードを３枚までランダムで手札に加える。\n■不死の女王\nこのユニットが破壊される時、このユニットは捨札に送られる代わりにあなたの手札に戻る。" },
      { type: NeosType.Int, name: "Cost", value: 5 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.魔導士 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11017"
  components={[
    <DynamicVariableSpace SpaceName="11017" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "卑弥呼" },
      { type: NeosType.String, name: "Text", value: "■禍々しき厄災\nあなたのユニットが破壊されるたび、ターン終了時まで全てのユニットのＢＰを＋２０００する。それが対戦相手のターン中だった場合、さらにあなたのＣＰを＋１する。\n■インターセプトドロー\nこのユニットがフィールドに出た時、あなたはインターセプトカードを１枚引く。\n■選ばれし殉葬\nこのユニットが破壊された時、対戦相手のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.不死 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 5000, 6000, 7000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10049"
  components={[
    <DynamicVariableSpace SpaceName="10049" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ジャンヌダルク" },
      { type: NeosType.String, name: "Text", value: "【不屈】\n■オルレアンの英雄\nこのユニットがフィールドに出た時、このユニットの基本ＢＰを＋［あなたの受けているライフダメージ×２０００］する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.英雄 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10051"
  components={[
    <DynamicVariableSpace SpaceName="10051" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "バルバトス" },
      { type: NeosType.String, name: "Text", value: "■バルバトスの強弓\nこのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それの基本ＢＰを－４０００する。" },
      { type: NeosType.Int, name: "Cost", value: 4 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.英雄 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10052"
  components={[
    <DynamicVariableSpace SpaceName="10052" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ジークフリート" },
      { type: NeosType.String, name: "Text", value: "【貫通】\n【不屈】\n■オーラブレード\nこのユニットがオーバークロックした時、対戦相手の全てのユニットの基本ＢＰを－３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 5 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.英雄 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 8000, 9000, 10000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10116"
  components={[
    <DynamicVariableSpace SpaceName="10116" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "Ｓ・レックス" },
      { type: NeosType.String, name: "Text", value: "【固着】\n■メガソーラー・チャージ\nあなたのターン開始時、手札が７枚になるまでカードを引く。" },
      { type: NeosType.Int, name: "Cost", value: 7 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.ドラゴン },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 8000, 9000, 10000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11057"
  components={[
    <DynamicVariableSpace SpaceName="11057" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アレキサンダー" },
      { type: NeosType.String, name: "Text", value: "【固着】\n（このユニットは対戦相手の効果によって手札に戻らない。この能力はこのユニットがフィールドに出た時に付与される）\n【王の治癒力】\n（このユニットは自身のＢＰ未満のダメージを受けない）" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.英雄 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 7000, 8000, 9000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11087"
  components={[
    <DynamicVariableSpace SpaceName="11087" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "剣聖・武蔵" },
      { type: NeosType.String, name: "Text", value: "■五輪書\nあなたのユニットのＢＰを＋１０００する。あなたのフィールドに【侍】ユニットが２体以上いる場合、【侍】ユニットに【不屈】／【貫通】／【スピードムーブ】／【無我の境地】／【固着】を与える。\n■二天流\nこのユニットがプレイヤーアタックに成功した時、対戦相手に追加で１ライフダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 5 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.advanced_unit },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.英雄 },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.侍 },
      { type: NeosType.Int3, name: "BP", value: [ 6000, 7000, 8000] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10053"
  components={[
    <DynamicVariableSpace SpaceName="10053" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ロデオドライヴ" },
      { type: NeosType.String, name: "Text", value: "■ロデオドライヴ\nあなたのユニットがアタックした後、ターン終了時までそれのＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10054"
  components={[
    <DynamicVariableSpace SpaceName="10054" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ベーシック・キャノン" },
      { type: NeosType.String, name: "Text", value: "■ベーシック・キャノン\nあなたのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それに１０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10055"
  components={[
    <DynamicVariableSpace SpaceName="10055" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "タイムブレイク" },
      { type: NeosType.String, name: "Text", value: "■タイムブレイク\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10056"
  components={[
    <DynamicVariableSpace SpaceName="10056" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "不穏な霧" },
      { type: NeosType.String, name: "Text", value: "■不穏な霧\nあなたのユニットが破壊された時、ＣＰを＋２する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10057"
  components={[
    <DynamicVariableSpace SpaceName="10057" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "サプライズボックス" },
      { type: NeosType.String, name: "Text", value: "■サプライズボックス\nあなたのユニットがフィールドに出た時、あなたはトリガーカードを２枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10058"
  components={[
    <DynamicVariableSpace SpaceName="10058" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "暗殺部隊" },
      { type: NeosType.String, name: "Text", value: "■暗殺部隊\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手のユニットを１体選ぶ。それに２０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10059"
  components={[
    <DynamicVariableSpace SpaceName="10059" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "疑惑のロシアンルーレット" },
      { type: NeosType.String, name: "Text", value: "■疑惑のロシアンルーレット\nあなたのユニットがアタックした後、ターン終了時までそれのＢＰをランダムで＋［１０００／３０００／４０００］する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10060"
  components={[
    <DynamicVariableSpace SpaceName="10060" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アドバンスエネルギー" },
      { type: NeosType.String, name: "Text", value: "■アドバンスエネルギー\nあなたのユニットが戦闘に勝利した時、ＣＰを＋２する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10061"
  components={[
    <DynamicVariableSpace SpaceName="10061" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "新品の鎧" },
      { type: NeosType.String, name: "Text", value: "■新品の鎧\nあなたのユニットがフィールドに出た時、あなたはインターセプトカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10062"
  components={[
    <DynamicVariableSpace SpaceName="10062" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "何でも屋の陳列台" },
      { type: NeosType.String, name: "Text", value: "■何でも屋の陳列台\nあなたのユニットがフィールドに出た時、あなたはカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10063"
  components={[
    <DynamicVariableSpace SpaceName="10063" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "マネーゲーム" },
      { type: NeosType.String, name: "Text", value: "■マネーゲーム\nあなたのユニットがプレイヤーアタックに成功した時、あなたのＣＰを＋２する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10064"
  components={[
    <DynamicVariableSpace SpaceName="10064" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "明鏡止水" },
      { type: NeosType.String, name: "Text", value: "■明鏡止水\nあなたのターン終了時、あなたのＣＰを＋３する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10117"
  components={[
    <DynamicVariableSpace SpaceName="10117" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "コンビネーションアタック" },
      { type: NeosType.String, name: "Text", value: "■コンビネーションアタック\nあなたのユニットがアタックした後、あなたのフィールドに２体以上ユニットがいる場合、ターン終了時までそれのＢＰを＋４０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10118"
  components={[
    <DynamicVariableSpace SpaceName="10118" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "意気投合" },
      { type: NeosType.String, name: "Text", value: "■意気投合\nあなたのユニットがフィールドに出た時、お互いのプレイヤーはカードを２枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10119"
  components={[
    <DynamicVariableSpace SpaceName="10119" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "最期の門" },
      { type: NeosType.String, name: "Text", value: "■最期の門\n対戦相手のターン開始時、あなたのライフが３以下の場合、ターン終了時まであなたの全てのユニットのＢＰを＋１００００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10120"
  components={[
    <DynamicVariableSpace SpaceName="10120" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "強者の風格" },
      { type: NeosType.String, name: "Text", value: "■強者の風格\nあなたのユニットが戦闘した時、あなたのライフが３以下の場合、ターン終了時までそれのＢＰを＋４０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10121"
  components={[
    <DynamicVariableSpace SpaceName="10121" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "燃え広がる戦火" },
      { type: NeosType.String, name: "Text", value: "■燃え広がる戦火\nユニットが戦闘によって破壊された時、お互いのプレイヤーに１ライフダメージを与える。（あなたはこの効果によって受けたライフダメージでジョーカーゲージは増えない）" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10122"
  components={[
    <DynamicVariableSpace SpaceName="10122" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "一筋の光明" },
      { type: NeosType.String, name: "Text", value: "■一筋の光明\nあなたのユニットがフィールドに出た時、あなたのライフが３以下の場合、あなたはカードを３枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11023"
  components={[
    <DynamicVariableSpace SpaceName="11023" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "紅蓮の魔導書" },
      { type: NeosType.String, name: "Text", value: "■紅蓮の魔導書\nあなたのユニットがフィールドに出た時、赤属性のカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11024"
  components={[
    <DynamicVariableSpace SpaceName="11024" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "雷光の魔導書" },
      { type: NeosType.String, name: "Text", value: "■雷光の魔導書\nあなたのユニットがフィールドに出た時、黄属性のカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11025"
  components={[
    <DynamicVariableSpace SpaceName="11025" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "蒼海の魔導書" },
      { type: NeosType.String, name: "Text", value: "■蒼海の魔導書\nあなたのユニットがフィールドに出た時、青属性のカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11026"
  components={[
    <DynamicVariableSpace SpaceName="11026" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "深緑の魔導書" },
      { type: NeosType.String, name: "Text", value: "■深緑の魔導書\nあなたのユニットがフィールドに出た時、緑属性のカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11027"
  components={[
    <DynamicVariableSpace SpaceName="11027" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "学びの庭" },
      { type: NeosType.String, name: "Text", value: "■学びの庭\nあなたのユニットがフィールドに出た時、【珍獣】ユニットのカードを１枚ランダムで手札に加える。\nあなたのフィールドに【珍獣】ユニットが４体以上いる場合、さらに【珍獣】ユニットのカードを１枚手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11028"
  components={[
    <DynamicVariableSpace SpaceName="11028" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "天空の楽園" },
      { type: NeosType.String, name: "Text", value: "■天空の楽園\nあなたのユニットがフィールドに出た時、【天使】ユニットのカードを１枚ランダムで手札に加える。\nあなたの【天使】ユニットがプレイヤーアタックに成功した時、あなたのデッキにある【天使】ユニットのカードのうち、属性の異なるカードを２枚までランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11058"
  components={[
    <DynamicVariableSpace SpaceName="11058" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "暗黒街の武器商人" },
      { type: NeosType.String, name: "Text", value: "■暗黒街の武器商人\nあなたのターン終了時、あなたはカードを１枚引き、ＣＰを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11059"
  components={[
    <DynamicVariableSpace SpaceName="11059" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "冥府の武家屋敷" },
      { type: NeosType.String, name: "Text", value: "■冥府の武家屋敷\nあなたのユニットがフィールドに出た時、【侍】ユニットのカードを１枚ランダムで手札に加える。\nあなたの【侍】ユニットが破壊された時、あなたのデッキにある【侍】ユニットのカードのうち、属性の異なるカードを２枚までランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11060"
  components={[
    <DynamicVariableSpace SpaceName="11060" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "世界樹の恵み" },
      { type: NeosType.String, name: "Text", value: "■世界樹の恵み\nあなたのユニットがフィールドに出た時、【精霊】ユニットのカードを１枚ランダムで手札に加える。\nあなたの【精霊】ユニットがアタックした時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11061"
  components={[
    <DynamicVariableSpace SpaceName="11061" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "禁じられた召喚術" },
      { type: NeosType.String, name: "Text", value: "■禁じられた召喚術\nあなたのユニットがフィールドに出た時、【悪魔】ユニットのカードを１枚ランダムで手札に加える。\nあなたの【悪魔】ユニットが戦闘に勝利した時、あなたのデッキにある【悪魔】ユニットのカードのうち、属性の異なるカードを２枚までランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11088"
  components={[
    <DynamicVariableSpace SpaceName="11088" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "黄昏の奇術師" },
      { type: NeosType.String, name: "Text", value: "■黄昏の奇術師\nあなたのユニットがフィールドに出た時、あなたの捨札にあるトリガーカードを１枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11089"
  components={[
    <DynamicVariableSpace SpaceName="11089" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "竜の胎動" },
      { type: NeosType.String, name: "Text", value: "■竜の胎動\nあなたのユニットがフィールドに出た時、【ドラゴン】ユニットのカードを１枚ランダムで手札に加える。\nあなたの【ドラゴン】ユニットが戦闘に勝利した時、【ドラゴン】ユニットのカードを２枚ランダムで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11090"
  components={[
    <DynamicVariableSpace SpaceName="11090" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "無限の魔法石" },
      { type: NeosType.String, name: "Text", value: "■無限の魔法石\nあなたのユニットがフィールドに出た時、このカードのレベルによって以下の効果が発動する。\n【レベル１～２】あなたは手札を１枚選んで捨てる。そうした場合、あなたのデッキからカードを１枚選んで手札に加える。\n【レベル３】あなたのデッキからカードを１枚選んで手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.trigger },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10077"
  components={[
    <DynamicVariableSpace SpaceName="10077" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アーマーブレイク" },
      { type: NeosType.String, name: "Text", value: "■アーマーブレイク\nあなたのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10078"
  components={[
    <DynamicVariableSpace SpaceName="10078" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "インペリアルソード" },
      { type: NeosType.String, name: "Text", value: "■インペリアルソード\nあなたのユニットがフィールドに出た時、ターン終了時までそれに【スピードムーブ】（このユニットはフィールドに出たターンの行動制限の影響を受けない）を与える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10079"
  components={[
    <DynamicVariableSpace SpaceName="10079" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダインスレイフ" },
      { type: NeosType.String, name: "Text", value: "■ダインスレイフ\nあなたのユニットがアタックした時、対戦相手のトリガーゾーンにあるカードを１枚ランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10080"
  components={[
    <DynamicVariableSpace SpaceName="10080" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ニードルヘル" },
      { type: NeosType.String, name: "Text", value: "■ニードルヘル\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手のユニットを１体選ぶ。それに５０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10081"
  components={[
    <DynamicVariableSpace SpaceName="10081" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "悪の覚醒" },
      { type: NeosType.String, name: "Text", value: "■悪の覚醒\nあなたのユニットが戦闘した時、それがアタック中だった場合、ターン終了時までそれのＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10082"
  components={[
    <DynamicVariableSpace SpaceName="10082" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "アースクエイク" },
      { type: NeosType.String, name: "Text", value: "■アースクエイク\nあなたのユニットが戦闘した時、対戦相手の全てのユニットに２０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10129"
  components={[
    <DynamicVariableSpace SpaceName="10129" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ビンテージワイン" },
      { type: NeosType.String, name: "Text", value: "■ビンテージワイン\nあなたのターン開始時、ターン終了時まであなたの全てのユニットのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10130"
  components={[
    <DynamicVariableSpace SpaceName="10130" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ヴァンパイアアイ" },
      { type: NeosType.String, name: "Text", value: "■ヴァンパイアアイ\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手のトリガーゾーンにあるカードを１枚ランダムで破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10131"
  components={[
    <DynamicVariableSpace SpaceName="10131" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "プレス" },
      { type: NeosType.String, name: "Text", value: "■プレス\nあなたのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それに４０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11031"
  components={[
    <DynamicVariableSpace SpaceName="11031" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ブロウ・アップ" },
      { type: NeosType.String, name: "Text", value: "■ブロウ・アップ\nあなたのユニットがフィールドに出た時、あなたのユニットと対戦相手のユニットをそれぞれ１体ずつ選ぶ。それらに５０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11032"
  components={[
    <DynamicVariableSpace SpaceName="11032" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "威圧" },
      { type: NeosType.String, name: "Text", value: "■威圧\nあなたのユニットが戦闘した時、ターン終了時まであなたの全ての【悪魔】ユニットのＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11064"
  components={[
    <DynamicVariableSpace SpaceName="11064" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "タイマン" },
      { type: NeosType.String, name: "Text", value: "■タイマン\nあなたのユニットが戦闘した時、ターン終了時までそれは戦闘中の相手ユニットと同じＢＰになる。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11065"
  components={[
    <DynamicVariableSpace SpaceName="11065" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "無限ループ" },
      { type: NeosType.String, name: "Text", value: "■無限ループ\nあなたのユニットがフィールドに出た時、全てのユニットからランダムで１体に１０００ダメージを与える。この効果を６回繰り返す。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11094"
  components={[
    <DynamicVariableSpace SpaceName="11094" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "龍の咆哮" },
      { type: NeosType.String, name: "Text", value: "■龍の咆哮\nあなたの【ドラゴン】ユニットが戦闘した時、ターン終了時までそれのＢＰを＋５０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11095"
  components={[
    <DynamicVariableSpace SpaceName="11095" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "レイニーフレイム" },
      { type: NeosType.String, name: "Text", value: "■レイニーフレイム\nあなたのユニットがフィールドに出た時、全てのユニットに２０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.赤属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10083"
  components={[
    <DynamicVariableSpace SpaceName="10083" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "フォトン" },
      { type: NeosType.String, name: "Text", value: "■フォトン\nあなたのユニットがフィールドに出た時、対戦相手の行動済ユニットを１体選ぶ。それに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10084"
  components={[
    <DynamicVariableSpace SpaceName="10084" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "フォトン・ソード" },
      { type: NeosType.String, name: "Text", value: "■フォトン・ソード\nあなたのユニットがフィールドに出た時、あなたのユニットを１体選ぶ。それの行動権を回復する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10085"
  components={[
    <DynamicVariableSpace SpaceName="10085" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "タイタンの鉄鎖" },
      { type: NeosType.String, name: "Text", value: "■タイタンの鉄鎖\nあなたのユニットがアタックした時、対戦相手のユニットを１体選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10086"
  components={[
    <DynamicVariableSpace SpaceName="10086" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "エンジェルフェザー" },
      { type: NeosType.String, name: "Text", value: "■エンジェルフェザー\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手のユニットを１体選ぶ。それを対戦相手の手札に戻す。（手札が上限を超える場合、捨札に送られる）" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10087"
  components={[
    <DynamicVariableSpace SpaceName="10087" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ハッピーキャット" },
      { type: NeosType.String, name: "Text", value: "■ハッピーキャット\nあなたのターン開始時、対戦相手の全てのレベル２以上のユニットの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10088"
  components={[
    <DynamicVariableSpace SpaceName="10088" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ジャッジメント" },
      { type: NeosType.String, name: "Text", value: "■ジャッジメント\nあなたのユニットがアタックした時、このカードのレベルによって以下の効果が発動する。\n【レベル１～２】対戦相手の全てのユニットの行動権を消費する。\n【レベル３】対戦相手の全てのユニットの行動権を消費し、【呪縛】を与える。" },
      { type: NeosType.Int, name: "Cost", value: 6 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10132"
  components={[
    <DynamicVariableSpace SpaceName="10132" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "トール・ハンマー" },
      { type: NeosType.String, name: "Text", value: "■トール・ハンマー\nあなたのユニットがフィールドに出た時、対戦相手の行動済ユニットを１体選ぶ。それに４０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10133"
  components={[
    <DynamicVariableSpace SpaceName="10133" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "光の再構築" },
      { type: NeosType.String, name: "Text", value: "■光の再構築\nあなたのターン終了時、あなたのユニットを２体まで選ぶ。それの行動権を回復する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10134"
  components={[
    <DynamicVariableSpace SpaceName="10134" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ショックライトニング" },
      { type: NeosType.String, name: "Text", value: "■ショックライトニング\nあなたのユニットがフィールドに出た時、対戦相手の全ての行動済ユニットに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11033"
  components={[
    <DynamicVariableSpace SpaceName="11033" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ライトシールド" },
      { type: NeosType.String, name: "Text", value: "■ライトシールド\nあなたのユニットが戦闘した時、それがブロック中だった場合、ターン終了時までそれのＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11034"
  components={[
    <DynamicVariableSpace SpaceName="11034" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "類まれなる指揮者" },
      { type: NeosType.String, name: "Text", value: "■類まれなる指揮者\nあなたのユニットがブロックした時、対戦相手のユニット１体を選ぶ。それの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11035"
  components={[
    <DynamicVariableSpace SpaceName="11035" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "玉璽" },
      { type: NeosType.String, name: "Text", value: "■玉璽\nあなたのユニットがアタックした時、あなたのフィールドのユニットが１体以下の場合、対戦相手の全てのユニットの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11066"
  components={[
    <DynamicVariableSpace SpaceName="11066" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "スケアクロウ" },
      { type: NeosType.String, name: "Text", value: "■スケアクロウ\nあなたのターン開始時、全てのユニットの行動権を消費する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11067"
  components={[
    <DynamicVariableSpace SpaceName="11067" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "魂砕き" },
      { type: NeosType.String, name: "Text", value: "■魂砕き\nあなたのユニットがフィールドに出た時、対戦相手の行動済ユニットを１体選ぶ。それを消滅させる。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11096"
  components={[
    <DynamicVariableSpace SpaceName="11096" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "白き調和" },
      { type: NeosType.String, name: "Text", value: "■白き調和\nあなたがプレイヤーアタックを受けた時、黄属性以外の全てのユニットを消滅させる。" },
      { type: NeosType.Int, name: "Cost", value: 6 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.黄属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10089"
  components={[
    <DynamicVariableSpace SpaceName="10089" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ムーンセイヴァー" },
      { type: NeosType.String, name: "Text", value: "■ムーンセイヴァー\nあなたのユニットがアタックした時、対戦相手のレベル２以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10090"
  components={[
    <DynamicVariableSpace SpaceName="10090" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "チェックメイト" },
      { type: NeosType.String, name: "Text", value: "■チェックメイト\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手は手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10091"
  components={[
    <DynamicVariableSpace SpaceName="10091" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダーク・アーマー" },
      { type: NeosType.String, name: "Text", value: "■ダーク・アーマー\nあなたのユニットが戦闘した時、ターン終了時までそれのＢＰを＋７０００する。あなたは１ライフダメージを受ける。（この効果によって受けたライフダメージでジョーカーゲージは増えない）" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10092"
  components={[
    <DynamicVariableSpace SpaceName="10092" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "エクトプラズム" },
      { type: NeosType.String, name: "Text", value: "■エクトプラズム\nあなたのユニットが破壊された時、対戦相手のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10093"
  components={[
    <DynamicVariableSpace SpaceName="10093" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "マジックブック" },
      { type: NeosType.String, name: "Text", value: "■マジックブック\nあなたのユニットがフィールドに出た時、あなたの捨札にあるカードを１枚選ぶ。それを手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10094"
  components={[
    <DynamicVariableSpace SpaceName="10094" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "解呪" },
      { type: NeosType.String, name: "Text", value: "■解呪\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手に１ライフダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10135"
  components={[
    <DynamicVariableSpace SpaceName="10135" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダーク・スラッシュ" },
      { type: NeosType.String, name: "Text", value: "■ダーク・スラッシュ\nあなたのユニットがアタックした時、対戦相手のレベル３以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10136"
  components={[
    <DynamicVariableSpace SpaceName="10136" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "迷子" },
      { type: NeosType.String, name: "Text", value: "■迷子\nあなたのユニットがフィールドに出た時、対戦相手は手札を１枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10137"
  components={[
    <DynamicVariableSpace SpaceName="10137" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ソウルリーパー" },
      { type: NeosType.String, name: "Text", value: "■ソウルリーパー\nあなたのユニットが戦闘した時、それがアタック中だった場合、戦闘中の相手ユニットを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11036"
  components={[
    <DynamicVariableSpace SpaceName="11036" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ミスチーフ" },
      { type: NeosType.String, name: "Text", value: "■ミスチーフ\nあなたの効果によって対戦相手が手札を捨てた時、対戦相手のレベル２以上のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11037"
  components={[
    <DynamicVariableSpace SpaceName="11037" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダークネス" },
      { type: NeosType.String, name: "Text", value: "■ダークネス\nあなたがプレイヤーアタックを受けた時、対戦相手のユニットを１体選ぶ。それを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11068"
  components={[
    <DynamicVariableSpace SpaceName="11068" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ブラックマスク" },
      { type: NeosType.String, name: "Text", value: "■ブラックマスク\nあなたのユニットが破壊された時、お互いのトリガーゾーンにあるカードを１枚ランダムで破壊する。\nあなたの捨札にあるカードをランダムで１枚手札に加える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11069"
  components={[
    <DynamicVariableSpace SpaceName="11069" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ソウル・シックル" },
      { type: NeosType.String, name: "Text", value: "■ソウル・シックル\nあなたのユニットが破壊された時、対戦相手のユニットを２体まで選ぶ。それらを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 6 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11097"
  components={[
    <DynamicVariableSpace SpaceName="11097" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ポイズンディナー" },
      { type: NeosType.String, name: "Text", value: "■ポイズンディナー\nあなたのユニットがフィールドに出た時、お互いのプレイヤーは手札を２枚ランダムで捨てる。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11098"
  components={[
    <DynamicVariableSpace SpaceName="11098" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "浮遊術" },
      { type: NeosType.String, name: "Text", value: "■浮遊術\nあなたのユニットがアタックした時、ターン終了時までそれに「ブロックされない」効果を与える。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.青属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10095"
  components={[
    <DynamicVariableSpace SpaceName="10095" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "タックル" },
      { type: NeosType.String, name: "Text", value: "■タックル\nあなたのユニットが戦闘した時、それがアタック中だった場合、それの基本ＢＰを＋１０００し、戦闘終了時まで【貫通】（このユニットの攻撃は対戦相手のユニットを貫通して対戦相手にライフダメージを与える）を与える。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10096"
  components={[
    <DynamicVariableSpace SpaceName="10096" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "不可侵防壁" },
      { type: NeosType.String, name: "Text", value: "■不可侵防壁\nあなたのユニットが戦闘した時、ターン終了時までそれのＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10097"
  components={[
    <DynamicVariableSpace SpaceName="10097" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "追い風" },
      { type: NeosType.String, name: "Text", value: "■追い風\nあなたのユニットがフィールドに出た時、あなたのＣＰを＋４する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10098"
  components={[
    <DynamicVariableSpace SpaceName="10098" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ナチュラルフルーツ" },
      { type: NeosType.String, name: "Text", value: "■ナチュラルフルーツ\nあなたのユニットがフィールドに出た時、それの基本ＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10099"
  components={[
    <DynamicVariableSpace SpaceName="10099" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ハウリング" },
      { type: NeosType.String, name: "Text", value: "■ハウリング\nあなたのユニットがフィールドに出た時、あなたはカードを２枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10100"
  components={[
    <DynamicVariableSpace SpaceName="10100" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "逆転の大竜巻" },
      { type: NeosType.String, name: "Text", value: "■逆転の大竜巻\n対戦相手のユニットがアタックした時、あなたの全てのユニットの行動権を回復する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10138"
  components={[
    <DynamicVariableSpace SpaceName="10138" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ロック・フォール" },
      { type: NeosType.String, name: "Text", value: "■ロック・フォール\nあなたのターン開始時、全てのユニットの基本ＢＰを－３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10139"
  components={[
    <DynamicVariableSpace SpaceName="10139" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ハンティング・アイ" },
      { type: NeosType.String, name: "Text", value: "■ハンティング・アイ\nあなたのユニットがフィールドに出た時、それに【貫通】（このユニットの攻撃は対戦相手のユニットを貫通して対戦相手にライフダメージを与える）を与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10140"
  components={[
    <DynamicVariableSpace SpaceName="10140" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "スパイダーネット" },
      { type: NeosType.String, name: "Text", value: "■スパイダーネット\nあなたのユニットがプレイヤーアタックに成功した時、対戦相手のユニットを１体選ぶ。それの基本ＢＰを－２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11038"
  components={[
    <DynamicVariableSpace SpaceName="11038" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "土下座" },
      { type: NeosType.String, name: "Text", value: "■土下座\n対戦相手のユニットがアタックした時、あなたの行動済ユニットを１体選ぶ。それの行動権を回復し、ターン終了時までＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11039"
  components={[
    <DynamicVariableSpace SpaceName="11039" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ホークアイ・ショット" },
      { type: NeosType.String, name: "Text", value: "■ホークアイ・ショット\nあなたのユニットがアタックした時、対戦相手のユニットを１体選ぶ。それにターン終了時まで【強制防御】（可能ならばブロックしなければならない）を与える。あなたはカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11040"
  components={[
    <DynamicVariableSpace SpaceName="11040" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "豊穣の風車" },
      { type: NeosType.String, name: "Text", value: "■豊穣の風車\nあなたのターン開始時、ＣＰを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11070"
  components={[
    <DynamicVariableSpace SpaceName="11070" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ゾーントラップ" },
      { type: NeosType.String, name: "Text", value: "■ゾーントラップ\nあなたがプレイヤーアタックを受けた時、対戦相手の全てのユニットの基本ＢＰを－１０００する。対戦相手のＣＰを－３する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11099"
  components={[
    <DynamicVariableSpace SpaceName="11099" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ストームバスター" },
      { type: NeosType.String, name: "Text", value: "■ストームバスター\nあなたのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それの基本ＢＰを－３０００する。あなたのＣＰを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11100"
  components={[
    <DynamicVariableSpace SpaceName="11100" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "早撃ち勝負" },
      { type: NeosType.String, name: "Text", value: "■早撃ち勝負\nあなたのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それらはお互いのユニットに等しいＢＰダメージを与えあう。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.緑属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10065"
  components={[
    <DynamicVariableSpace SpaceName="10065" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "パワーショーテージ" },
      { type: NeosType.String, name: "Text", value: "■パワーショーテージ\nあなたのユニットが戦闘した時、ターン終了時まで戦闘中の相手ユニットのＢＰを－２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10066"
  components={[
    <DynamicVariableSpace SpaceName="10066" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "開戦指示" },
      { type: NeosType.String, name: "Text", value: "■開戦指示\nあなたのユニットが戦闘した時、ターン終了時まで、あなたの全てのユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10067"
  components={[
    <DynamicVariableSpace SpaceName="10067" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "一騎打ち" },
      { type: NeosType.String, name: "Text", value: "■一騎打ち\nあなたのユニットが戦闘した時、それの基本ＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10068"
  components={[
    <DynamicVariableSpace SpaceName="10068" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "移動要塞" },
      { type: NeosType.String, name: "Text", value: "■移動要塞\n対戦相手のターン開始時、ターン終了時まであなたの全てのユニットのＢＰを＋１０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10069"
  components={[
    <DynamicVariableSpace SpaceName="10069" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "絶妙な挑発" },
      { type: NeosType.String, name: "Text", value: "■絶妙な挑発\nあなたのユニットがフィールドに出た時、対戦相手のユニットを１体選ぶ。それのレベルを３にする。この効果によってオーバークロックしたユニットはオーバークロック時の効果を発動できない。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10070"
  components={[
    <DynamicVariableSpace SpaceName="10070" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "戦友との約束" },
      { type: NeosType.String, name: "Text", value: "■戦友との約束\nあなたのユニットが戦闘した時、ターン終了時までそれのＢＰを＋［あなたの受けているライフダメージ×１０００］する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10071"
  components={[
    <DynamicVariableSpace SpaceName="10071" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "タクティクスエンド" },
      { type: NeosType.String, name: "Text", value: "■タクティクスエンド\nあなたのユニットが戦闘した時、戦闘終了時までお互いのプレイヤーは全ての効果を発動できない。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10072"
  components={[
    <DynamicVariableSpace SpaceName="10072" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "リミッター解放" },
      { type: NeosType.String, name: "Text", value: "■リミッター解放\nあなたのユニットが戦闘した時、あなたは手札を全て捨てる。そうした場合、ターン終了時までそれのＢＰを＋５０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10073"
  components={[
    <DynamicVariableSpace SpaceName="10073" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "王の陣中見舞い" },
      { type: NeosType.String, name: "Text", value: "■王の陣中見舞い\nあなたのユニットが戦闘に勝利した時、あなたはカードを２枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10074"
  components={[
    <DynamicVariableSpace SpaceName="10074" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "英雄の剣" },
      { type: NeosType.String, name: "Text", value: "■英雄の剣\nあなたのユニットが戦闘した時、ターン終了時までそれのＢＰを＋２０００する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10075"
  components={[
    <DynamicVariableSpace SpaceName="10075" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "音速の槍" },
      { type: NeosType.String, name: "Text", value: "■音速の槍\nあなたのユニットが戦闘に勝利した時、対戦相手のユニットを１体選ぶ。それに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10076"
  components={[
    <DynamicVariableSpace SpaceName="10076" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "突撃の合図" },
      { type: NeosType.String, name: "Text", value: "■突撃の合図\nあなたのユニットがフィールドに出た時、ターン終了時まであなたの全てのユニットに【スピードムーブ】（このユニットはフィールドに出たターンの行動制限の影響を受けない）を与える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10123"
  components={[
    <DynamicVariableSpace SpaceName="10123" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "セコンド" },
      { type: NeosType.String, name: "Text", value: "■セコンド\nあなたのユニットが戦闘した時、あなたのフィールドに２体以上ユニットがいる場合、ターン終了時までそれのＢＰを＋３０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10124"
  components={[
    <DynamicVariableSpace SpaceName="10124" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ライトステップ" },
      { type: NeosType.String, name: "Text", value: "■ライトステップ\nあなたのユニットがフィールドに出た時、あなたは手札を２枚選んで捨てる。そうした場合、あなたはカードを３枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10125"
  components={[
    <DynamicVariableSpace SpaceName="10125" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "人類再生計画" },
      { type: NeosType.String, name: "Text", value: "■人類再生計画\nあなたのターン開始時、あなたのライフが３以下の場合、全てのユニットを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 5 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10126"
  components={[
    <DynamicVariableSpace SpaceName="10126" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "パリィ" },
      { type: NeosType.String, name: "Text", value: "■パリィ\nあなたのユニットがブロックした時、ターン終了時までそれのＢＰを＋２０００する。戦闘終了時までお互いのプレイヤーは全ての効果を発動できない。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10127"
  components={[
    <DynamicVariableSpace SpaceName="10127" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "不滅の盾" },
      { type: NeosType.String, name: "Text", value: "■不滅の盾\nあなたのユニットが戦闘した時、あなたのライフが３以下の場合、ターン終了時までそれのＢＰを＋４０００する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="10128"
  components={[
    <DynamicVariableSpace SpaceName="10128" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "金の卵" },
      { type: NeosType.String, name: "Text", value: "■金の卵\nあなたのターン開始時、あなたのライフが３以下の場合、ＣＰを＋３する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11029"
  components={[
    <DynamicVariableSpace SpaceName="11029" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "鎮静剤" },
      { type: NeosType.String, name: "Text", value: "■鎮静剤\nあなたのユニットがフィールドに出た時、ユニット１体を選ぶ。それのレベルを－１する。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11030"
  components={[
    <DynamicVariableSpace SpaceName="11030" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "威嚇のオーラ" },
      { type: NeosType.String, name: "Text", value: "■威嚇のオーラ\nあなたのユニットがフィールドに出た時、あなたの【珍獣】ユニットを１体選ぶ。それのレベルを＋１する。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11062"
  components={[
    <DynamicVariableSpace SpaceName="11062" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "台風の目" },
      { type: NeosType.String, name: "Text", value: "■台風の目\nあなたのユニットがプレイヤーアタックに成功した時、そのユニット以外の全てのユニットに３０００ダメージを与える。" },
      { type: NeosType.Int, name: "Cost", value: 3 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11063"
  components={[
    <DynamicVariableSpace SpaceName="11063" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "ダークマター" },
      { type: NeosType.String, name: "Text", value: "■ダークマター\nユニットがフィールドに出た時、全てのトリガーゾーンにあるカードを破壊する。" },
      { type: NeosType.Int, name: "Cost", value: 2 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11091"
  components={[
    <DynamicVariableSpace SpaceName="11091" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "正拳突き" },
      { type: NeosType.String, name: "Text", value: "■正拳突き\nあなたのユニットが戦闘した時、ターン終了時までそれのＢＰを＋１０００し、戦闘終了時まで【貫通】を与える。" },
      { type: NeosType.Int, name: "Cost", value: 1 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>
<Slot name="11092"
  components={[
    <DynamicVariableSpace SpaceName="11092" />,
  ]}
>
  <DVSlot name="DV"
    valueVariables={[
      { type: NeosType.String, name: "Name", value: "トリックオアトリート" },
      { type: NeosType.String, name: "Text", value: "■トリックオアトリート\nあなたのユニットがフィールドに出た時、トリガーカードを１枚引く。\nあなたのユニットがプレイヤーアタックに成功した時、カードを１枚引く。\nあなたのユニットが戦闘によって対戦相手のユニットを破壊した時、インターセプトカードを１枚引く。" },
      { type: NeosType.Int, name: "Cost", value: 0 },
      { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.intercept },
      { type: NeosType.Int, name: "Color", value: ArcanaType.Color.無属性 },
      { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.Null },
      { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
      { type: NeosType.Int3, name: "BP", value: [ 0, 0, 0] },
    ]}
  >
  </DVSlot>
  <Slot name="LogiX" />
</Slot>

    </Slot>
  )
}
