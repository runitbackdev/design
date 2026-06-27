import { Toggle, ToggleGroup } from "@runitback/react";

export default function () {
  return (
    <ToggleGroup defaultValue={["list"]}>
      <Toggle value="board">board</Toggle>
      <Toggle value="list">list</Toggle>
      <Toggle value="timeline">timeline</Toggle>
    </ToggleGroup>
  );
}
