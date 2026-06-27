import { Slider } from "@runitback/react";

export default function () {
  return (
    <Slider.Root defaultValue={40} className="w-64">
      <div className="flex items-center justify-between">
        <Slider.Label>input volume</Slider.Label>
        <Slider.Value />
      </div>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}
