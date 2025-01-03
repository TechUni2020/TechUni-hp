import React from "react";
import {History, HistoryColumn} from "../History";

function History2023() {
  return (
          <History year="2023">
            <HistoryColumn date="2022.04">
              Test
            </HistoryColumn>
            <HistoryColumn date="2022.11">
              オンラインでの活動場所をSlackからDiscordに移行
            </HistoryColumn>
          </History>
  );
}

export default History2023;
