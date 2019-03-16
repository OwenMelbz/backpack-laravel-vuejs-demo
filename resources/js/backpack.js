import Vue from 'vue';

const components = {
};

Object.keys(components).forEach(selector => {
    Vue.component(selector, components[selector]);
    [].forEach.call(document.querySelectorAll(selector), el => new Vue({ name: `${selector}Root`, el }));
});
