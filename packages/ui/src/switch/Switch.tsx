import { normalizeProps, useMachine } from '@zag-js/solid';
import { connect, machine } from '@zag-js/switch';
import { MachineContext } from '@zag-js/switch/dist/switch.types';
import { Component, createMemo, splitProps } from 'solid-js';

type CheckboxProps = {
  onLabel: string;
  offLabel: string;
} & Omit<MachineContext, 'id'>;

export const Switch: Component<CheckboxProps> = (props) => {
  const [local, rest] = splitProps(props, ['onLabel', 'offLabel']);
  const [state, send] = useMachine(machine({ id: '1', ...rest }));

  const api = createMemo(() => connect(state, send, normalizeProps));

  return (
    <label class="flex cursor-pointer w-fit relative" {...api().rootProps}>
      <input {...api().inputProps} />
      <span
        class="inline-flex flex-shrink-0 justify-start rounded-full w-10 h-6 data-[part=control][data-checked]:bg-green-500 bg-gray-400 transition-all duration-150"
        {...api().controlProps}
      >
        <span
          class="w4 h-4 bg-white transition-transform duration-200 relative"
          {...api().thumbProps}
        />
      </span>
      <span class="ml-1 transition-all duration-1000" {...api().labelProps}>
        {api().isChecked ? local.onLabel : local.offLabel}
      </span>
    </label>
  );
};
