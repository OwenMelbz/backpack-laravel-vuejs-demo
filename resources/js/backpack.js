import Vue from 'vue';

import PasswordMeter from './fields/PasswordMeter';
import SharedStateInput from './components/SharedStateInput';
import SharedStateOutput from './components/SharedStateOutput';

const components = {
    'password-meter': PasswordMeter,
    'shared-state-input': SharedStateInput,
    'shared-state-output': SharedStateOutput,
};

Object.keys(components).forEach(selector => {
    Vue.component(selector, components[selector]);
    [].forEach.call(document.querySelectorAll(selector), el => new Vue({ name: `${selector}Root`, el }));
});
