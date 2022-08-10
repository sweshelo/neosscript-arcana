import React from "react";
import Slot from "lib/core/Slot";
import { generateId } from "lib/core/util";
import NeosType from "lib/core/types/NeosType";
import DVSlot from "lib/dv/DVSlot";
import { ArcanaType } from "lib/Arcana/types";

/*
 *  Arcana Object
 *  変数名は全てアッパーキャメルケースで書くこと
 */

export default () => {
  return (
    <Slot name="Arcana">

      {/* Template - ゲーム内で用いるオブジェクトのTemplates. Duplicateして利用する */}
      <Slot name="Template">
        <DVSlot name="Card"
          valueVariables={[
            { type: NeosType.Bool, name: "IsUseble", value: true },
            { type: NeosType.Int, name: "ReducedCost", value: 0 },
            { type: NeosType.Int, name: "Level", value: 1 },
          ]}
          referenceVariables={[
            { type: NeosType.Slot, name: "CardDict", value: null }, // 辞書データから参照する
          ]}
        />
        <DVSlot name="Player"
          valueVariables={[
            { type: NeosType.Int, name: "Life", value: 8 },
            { type: NeosType.Int, name: "CP", value: 0 },
            { type: NeosType.Int, name: "JokerGauge", value: 0 },
            { type: NeosType.Bool, name: "IsFirst", value: false },
          ]}
          referenceVariables={[
            { type: NeosType.Slot, name: "Joker1", value: null },
            { type: NeosType.Slot, name: "Joker2", value: null },
            { type: NeosType.User, name: "NeosUser", value: null },
          ]}
        >
          <Slot name="Field" />
          <Slot name="Deck" />
          <Slot name="Hand" />
          <Slot name="Trigger" />
          <Slot name="Trash" />
          <Slot name="Delete" />
          <Slot name="FreshDeck" />
        </DVSlot>
        <DVSlot name="Unit"
          valueVariables={[
            { type: NeosType.Bool, name: "IsActive", value: true },
            { type: NeosType.Int, name: "BaseBP", value: 0 }, // 基本BP
          ]}
          referenceVariables={[
            { type: NeosType.Slot, name: "Card", value: null }, // カードデータから参照する
          ]}
        />
      </Slot>

      {/* Dictionaly - カードのデータをここに記述する. Referenceとして利用する */}
      <Slot name="Dictionaly">
        <Slot name="Jokers">
          {/* Joker 記述例サンプル */}
          <DVSlot name="J00001"
            valueVariables={[
              { type: NeosType.String, name: "Name", value: 'DEATH' },
              { type: NeosType.String, name: "Text", value: '■インペイルメント\n対戦相手のユニットを1体選ぶ。それに10000ダメージを与える。' },
              { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.Joker },
              { type: NeosType.Int, name: "Cost", value: 0 },
              { type: NeosType.Int, name: "Color", value: 0 },
              { type: NeosType.Int, name: "Guage", value: 0 },
            ]}
          >
            <Slot name="LogiX">
              <Slot name={ArcanaType.Event.Joker} />
            </Slot>
          </DVSlot>
        </Slot>
        <Slot name="Cards">
          {/* Card 記述例サンプル */}
          <DVSlot name="C00001"
            valueVariables={[
              { type: NeosType.String, name: "Name", value: 'ブラッドハウンド' },
              { type: NeosType.String, name: "Text", value: '■ダメージブレイク\nこのユニットがオーバークロックした時、対戦相手のユニットを１体選ぶ。それに４０００ダメージを与える。' },
              { type: NeosType.Int, name: "Cost", value: 0 },
              { type: NeosType.Int, name: "CardType", value: ArcanaType.CardType.Unit },
              { type: NeosType.Int, name: "Color", value: ArcanaType.Color.Red },
              { type: NeosType.Int, name: "Species1", value: ArcanaType.Species.獣 },
              { type: NeosType.Int, name: "Species2", value: ArcanaType.Species.Null },
              { type: NeosType.Int3, name: "BP", value: [3000, 4000, 5000] },
            ]}
          >
            <Slot name="LogiX">
              <Slot name={ArcanaType.Event.OnOverClock} />
            </Slot>
          </DVSlot>
        </Slot>
      </Slot>
    </Slot>
  );
};
