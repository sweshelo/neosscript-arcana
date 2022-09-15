import React from "react";
import Slot from "lib/neosscript/core/Slot";
import NeosType from "lib/neosscript/core/types/NeosType";
import DVSlot from "lib/dv/DVSlot";
import { ArcanaType } from "lib/Arcana/types";
import List from "List";

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
            { type: NeosType.Bool, name: "IsCopied", value: false},
            { type: NeosType.Int, name: "BaseBP", value: 0 }, // 基本BP
          ]}
          referenceVariables={[
            { type: NeosType.Slot, name: "Card", value: null }, // カードデータから参照する
          ]}
        >

          { /* TODO : children count + onchange で子要素の変動を検知して常時BP再計算/キーワード効果の付与と除去を行う */ }
          <Slot name="Keywords" />
          <Slot name="Timelines" />
        </DVSlot>

        { /* ある効果がいつまで持続するかを記録するSlot */ }
        { /* [End]Eventに遭遇するたびに[Count]の値が-1される */ }
        { /* [Count]の値が0になるとそのスロットを削除し効果が終了する */ }
        { /* [Event]の値がArcanaType.EffectForTimeline.GiveKeywordのときはReference先のSlotを削除してから自身を削除 */ }

        { /* 以下は戦闘終了時までBPを+3000する例 */ }
        <DVSlot name="Timeline"
          valueVariables={[
            { type: NeosType.Int, name: "End", value: ArcanaType.Event.OnBattleEnd },
            { type: NeosType.Int, name: "Count", value: 1 },
            { type: NeosType.Int, name: "Event", value: ArcanaType.EffectForTimeline.ChangeBP },
            { type: NeosType.Int, name: "Value", value: 3000}
          ]}
          referenceVariables={[
            { type: NeosType.Slot, name: "Reference", value: null } // EventがArcanaType.EffectForTimeline.GiveKeywordのとき、対象のKeyword DVSlot
          ]}
        />

        { /* キーワード能力の保持を示すSlot */ }
        <DVSlot name="Keyword"
          valueVariables={[
            { type: NeosType.Int, name: "KeywordNumber", value: 1 },
            { type: NeosType.Int, name: "OptionalValue", value: 2 /* 次元干渉のみ使用 */ },
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
          <List></List>
        </Slot>
      </Slot>
    </Slot>
  );
};
