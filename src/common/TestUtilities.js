module.exports = {
  selector: testId => (`[data-test-selector='${testId}']`),
  click: (wrapper, times = 1) => {
    for (let i = 0; i < times; i++) {
      wrapper.simulate('click')
    }
  }
}
