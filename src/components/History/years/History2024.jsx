import React from "react";
import {History, HistoryColumn} from "../History";

function History2024() {
  return (
          <History year="2024">
            <HistoryColumn date="2022.04">
              Test
            </HistoryColumn>
            <HistoryColumn date="2022.11">
              オンラインでの活動場所をSlackからDiscordに移行
            </HistoryColumn>
          </History>
  );
}

export default History2024;
