import React, { Component } from 'react';

export const withLifecycle = (hooks) => {

  return (BaseComponent) => {

    return class WithLifecycle extends Component {

      componentWillMount() {
        hooks.willMount && hooks.willMount(this.props);
      }

      componentDidMount() {
        hooks.didMount && hooks.didMount(this.props);
      }

      componentWillReceiveProps(props) {
        hooks.willReceiveProps && hooks.willReceiveProps(props);
      }

      shouldComponentUpdate(props) {
        if (hooks.shouldUpdate) {
          return hooks.shouldUpdate(this.props, props);
        }
        return true;
      }

      componentWillUpdate(props, state) {
        hooks.willUpdate && hooks.willUpdate(props, state);
      }

      componentDidUpdate(props, state) {
        hooks.didUpdate && hooks.didUpdate(props, state);
      }

      componentWillUnmount() {
        hooks.willUnmount && hooks.willUnmount(this.props);
      }

      componentWillReceiveProps(props) {
        hooks.willReceiveProps && hooks.willReceiveProps(this.props, props);
      }

      render() {

        return (
          <BaseComponent
            {...this.props}
          />
        );

      }

    };

  };

};

export default withLifecycle;
