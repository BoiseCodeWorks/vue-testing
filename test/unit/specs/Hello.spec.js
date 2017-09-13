import Vue from 'vue'
import Hello from '@/components/Hello'
import { mount } from 'avoriaz';
import sinon from 'sinon';

let wrapper
let vm

beforeEach(() => {
	wrapper = mount(Hello)
});

describe('Hello.vue', () => {
	it('should render correct contents', () => {

		const div = wrapper.find('div')[0];
		const h1 = wrapper.find('.hello h1')[0];

		expect(div.is('.hello')).to.equal(true);
		expect(h1.is('h1')).to.equal(true);
		expect(h1.text()).to.equal('Welcome to Your Vue.js App');
	});
	it('test a method', () => {

		const doSomething = sinon.stub();
		const button = wrapper.find('button')[0];
		const h1 = wrapper.find('.hello h1')[0];

		wrapper.setMethods({ doSomething });
		button.trigger('click');

		expect(doSomething.called).to.equal(true)
	})
})
