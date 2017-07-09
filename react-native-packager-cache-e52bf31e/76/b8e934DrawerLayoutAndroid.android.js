
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/node_modules/react-native/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ColorPropType = require('ColorPropType');
var NativeMethodsMixin = require('NativeMethodsMixin');
var Platform = require('Platform');
var React = require('React');
var ReactNative = require('ReactNative');
var StatusBar = require('StatusBar');
var StyleSheet = require('StyleSheet');
var UIManager = require('UIManager');
var View = require('View');

var DrawerConsts = UIManager.AndroidDrawerLayout.Constants;

var dismissKeyboard = require('dismissKeyboard');
var requireNativeComponent = require('requireNativeComponent');

var ReactPropTypes = React.PropTypes;

var RK_DRAWER_REF = 'drawerlayout';
var INNERVIEW_REF = 'innerView';

var DRAWER_STATES = ['Idle', 'Dragging', 'Settling'];

var DrawerLayoutAndroid = _wrapComponent('_component')(React.createClass({
  displayName: 'DrawerLayoutAndroid',

  statics: {
    positions: DrawerConsts.DrawerPosition
  },

  propTypes: _extends({}, View.propTypes, {
    keyboardDismissMode: ReactPropTypes.oneOf(['none', 'on-drag']),

    drawerBackgroundColor: ColorPropType,

    drawerPosition: ReactPropTypes.oneOf([DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right]),

    drawerWidth: ReactPropTypes.number,

    drawerLockMode: ReactPropTypes.oneOf(['unlocked', 'locked-closed', 'locked-open']),

    onDrawerSlide: ReactPropTypes.func,

    onDrawerStateChanged: ReactPropTypes.func,

    onDrawerOpen: ReactPropTypes.func,

    onDrawerClose: ReactPropTypes.func,

    renderNavigationView: ReactPropTypes.func.isRequired,

    statusBarBackgroundColor: ColorPropType
  }),

  mixins: [NativeMethodsMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      drawerBackgroundColor: 'white'
    };
  },

  getInitialState: function getInitialState() {
    return { statusBarBackgroundColor: undefined };
  },

  getInnerViewNode: function getInnerViewNode() {
    return this.refs[INNERVIEW_REF].getInnerViewNode();
  },

  componentDidMount: function componentDidMount() {
    this._updateStatusBarBackground();
  },

  componentDidReceiveProps: function componentDidReceiveProps() {
    this._updateStatusBarBackground();
  },

  render: function render() {
    var drawStatusBar = Platform.Version >= 21 && this.props.statusBarBackgroundColor;
    var drawerViewWrapper = React.createElement(
      View,
      {
        style: [styles.drawerSubview, { width: this.props.drawerWidth, backgroundColor: this.props.drawerBackgroundColor }],
        collapsable: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      },
      this.props.renderNavigationView(),
      drawStatusBar && React.createElement(View, { style: styles.drawerStatusBar, __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })
    );
    var childrenWrapper = React.createElement(
      View,
      { ref: INNERVIEW_REF, style: styles.mainSubview, collapsable: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      },
      drawStatusBar && React.createElement(StatusBar, {
        translucent: true,
        backgroundColor: this.state.statusBarBackgroundColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }),
      drawStatusBar && React.createElement(View, { style: [styles.statusBar, { backgroundColor: this.props.statusBarBackgroundColor }], __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }),
      this.props.children
    );
    return React.createElement(
      AndroidDrawerLayout,
      _extends({}, this.props, {
        ref: RK_DRAWER_REF,
        drawerWidth: this.props.drawerWidth,
        drawerPosition: this.props.drawerPosition,
        drawerLockMode: this.props.drawerLockMode,
        style: [styles.base, this.props.style],
        onDrawerSlide: this._onDrawerSlide,
        onDrawerOpen: this._onDrawerOpen,
        onDrawerClose: this._onDrawerClose,
        onDrawerStateChanged: this._onDrawerStateChanged, __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }),
      childrenWrapper,
      drawerViewWrapper
    );
  },

  _onDrawerSlide: function _onDrawerSlide(event) {
    if (this.props.onDrawerSlide) {
      this.props.onDrawerSlide(event);
    }
    if (this.props.keyboardDismissMode === 'on-drag') {
      dismissKeyboard();
    }
  },

  _onDrawerOpen: function _onDrawerOpen() {
    if (this.props.onDrawerOpen) {
      this.props.onDrawerOpen();
    }
  },

  _onDrawerClose: function _onDrawerClose() {
    if (this.props.onDrawerClose) {
      this.props.onDrawerClose();
    }
  },

  _onDrawerStateChanged: function _onDrawerStateChanged(event) {
    if (this.props.onDrawerStateChanged) {
      this.props.onDrawerStateChanged(DRAWER_STATES[event.nativeEvent.drawerState]);
    }
  },

  openDrawer: function openDrawer() {
    UIManager.dispatchViewManagerCommand(this._getDrawerLayoutHandle(), UIManager.AndroidDrawerLayout.Commands.openDrawer, null);
  },

  closeDrawer: function closeDrawer() {
    UIManager.dispatchViewManagerCommand(this._getDrawerLayoutHandle(), UIManager.AndroidDrawerLayout.Commands.closeDrawer, null);
  },

  _getDrawerLayoutHandle: function _getDrawerLayoutHandle() {
    return ReactNative.findNodeHandle(this.refs[RK_DRAWER_REF]);
  },

  _updateStatusBarBackground: function _updateStatusBarBackground() {
    var _this = this;

    if (Platform.Version >= 21 && this.props.statusBarBackgroundColor) {
      if (this.state.statusBarBackgroundColor !== 'transparent') {
        requestAnimationFrame(function () {
          _this.setState({ statusBarBackgroundColor: 'transparent' });
        });
      }
    } else {
      this.setState({ statusBarBackgroundColor: undefined });
    }
  }
}));

var styles = StyleSheet.create({
  base: {
    flex: 1,
    elevation: 16
  },
  mainSubview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  drawerSubview: {
    position: 'absolute',
    top: 0,
    bottom: 0
  },
  statusBar: {
    height: StatusBar.currentHeight
  },
  drawerStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: StatusBar.currentHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.251)'
  }
});

var AndroidDrawerLayout = requireNativeComponent('AndroidDrawerLayout', DrawerLayoutAndroid);

module.exports = DrawerLayoutAndroid;