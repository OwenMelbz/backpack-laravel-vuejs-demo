import Vue from 'vue';

import PasswordMeter from './fields/PasswordMeter';

const components = {
    'password-meter': PasswordMeter,
};

Object.keys(components).forEach(selector => {
    Vue.component(selector, components[selector]);
    [].forEach.call(document.querySelectorAll(selector), el => new Vue({ name: `${selector}Root`, el }));
});
