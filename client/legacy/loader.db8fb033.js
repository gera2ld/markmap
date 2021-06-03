import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, a as space, b as claim_element, g as children, d as detach, f as claim_space, k as attr, m as insert, l as append, M as listen, t as text, h as claim_text, J as set_data, P as update_slot, o as transition_in, p as transition_out, Q as empty, R as group_outros, T as check_outros, U as createEventDispatcher, V as create_slot, c as create_component, j as claim_component, n as mount_component, r as destroy_component, u as onMount, _ as _goto, W as assign, X as exclude_internal_props, Y as prevent_default, F as noop, Z as run_all, v as binding_callbacks, $ as showToast } from './client.d6d41c36.js';
import { a as _typeof, L as _createClass, N as _toConsumableArray, M as _classCallCheck, R as _asyncToGenerator, S as _createForOfIteratorHelper, T as _slicedToArray } from './web.url.4d8a464f.js';
import './markmap.9f83cc0e.js';

/*! @gera2ld/jsx-dom v1.2.1 | ISC License */
var propRules = ['innerHTML', 'innerText', 'textContent', {
  key: 'value',
  tag: 'textarea'
}];
var Fragment = {
  name: 'Fragment'
};

function createElement(tag, props) {
  var result;
  var ref;

  if (tag === Fragment) {
    result = document.createDocumentFragment();
  } else if (typeof tag !== 'string') {
    throw new Error("Invalid element type: " + tag);
  } else {
    var _el = createElement.createElement(tag);

    result = _el;

    if (props) {
      Object.keys(props).forEach(function (key) {
        var value = props[key];
        if (value == null) return;

        if (key.startsWith('on')) {
          _el.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'children') {
          renderChildren(_el, value);
        } else if (key === 'style' && _typeof(value) === 'object') {
          renderStyle(_el, value);
        } else if (key === 'dangerouslySetInnerHTML' && value) {
          _el.innerHTML = value.__html || ''; // eslint-disable-line no-underscore-dangle
        } else if (key === 'ref' && typeof value === 'function') {
          ref = value;
        } else if (typeof value === 'boolean') {
          if (value) _el.setAttribute(key, key);else _el.removeAttribute(key);
        } else if (isProp(tag, key)) {
          _el[key] = value;
        } else {
          if (key === 'className') key = 'class';else if (key === 'labelFor') key = 'for';

          _el.setAttribute(key, "" + value);
        }
      });
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  renderChildren(result, children);
  if (ref) ref(result);
  return result;
}

createElement.createElement = function (tag) {
  return document.createElement(tag);
};

function isProp(tag, key) {
  var ctx = {
    tag: tag,
    key: key
  };
  return propRules.some(function (rule) {
    if (typeof rule === 'string') return key === rule;
    return Object.keys(rule).every(function (rk) {
      return rule[rk] === ctx[rk];
    });
  });
}

function renderChildren(el, children) {
  children.forEach(function (child) {
    if (child == null || child === false) return;

    if (Array.isArray(child)) {
      renderChildren(el, child);
      return;
    }

    if (_typeof(child) !== 'object') {
      el.appendChild(document.createTextNode("" + child));
    } else {
      el.appendChild(child);
    }
  });
}

function renderStyle(el, style) {
  Object.keys(style).forEach(function (key) {
    var value = style[key];
    if (typeof value === 'number') el.style[key] = value + "px";else el.style[key] = value;
  });
}

function renderBrand() {
  return /*#__PURE__*/createElement("div", {
    className: "mm-toolbar-brand"
  }, /*#__PURE__*/createElement("img", {
    alt: "markmap",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACoFBMVEUAAAAAAAD//wAAAACAgAD//wAAAABVVQCqqgBAQACAQACAgABmZgBtbQAAAABgQABgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFQAAAAAAAAAAAAAAAAAHAAARBQIdGAIYEwI/OgJYUQUfHQI+OgJDPgJJRARBPQRJQgRRSwRRTQRIQQRUTgRUUARZUgRSTQRPSQRjWgZORQRfWQZsZAhTTQRNRwRWUAZkXAZOSARUTgZPRwRRSQRoYwZWUQZWTgRbUwZmXQZoXghmXwdqYwdsYwdfVwVmXQdqYgdiWgVpYAl3bgl6cgl4cAqLggw8OAOWjA2Uig1OSAR2bQihlg55cAh5cAh6cQmMgwyOhAyUjA2QhQ2Uiw2Viw2soBCflA+voxGwpRGhlg+hlg+snxGroBGjmBCpnBC0pxKyphKxpRG2qhK0qBK5rBK5rBP/7h3/8B7/8R3/8h3/8R7/8h786x397B3+7R3EtxT66Rz66hz76hz86xz96xz97Bz+7Rz45xz56Bz76hz97Bz97B3MvRX15Rv25Rv45xz66Rz76hz97B3+7R3IuxX05Bv15Bv25Rz56Bz66Ry/sxPAsxPCtRTCthTNvxbZyxfczxfi0xjl1Rnn2Bnr2xrr3Brs3Rru3Rru3xrv3hrw3xrx4Bvx4Rvy4hvz4hvz4xv04xv05Bv14xv15Bv15Rv25Bv25Rv25Rz25hv35hv35xv45xv45xz55xz56Bv56Bz66Rv66Rz76Rv76Rz76hz86hv86xz+7h3/7R3/7h3/7x3/8B3/8B7/8R3/8R4Yqhj5AAAAq3RSTlMAAQECAgIDAwMEBAQFBwgICAwQERITFRYXGBkbHB0eHyQlJyguNTg8RUZISU5PV2FiY2RlZmdqa2xubnJzc3R2d3d3eXl5eXp7fH1+gIGCgoKDg4SEhIWGh4eHiYmJjIyMjZSUlJ+sra+zt7i4uru8ztHV1tbW2d7g4OHi4uPk5ufp7Ozv9fX29/f3+Pj6+vr7+/v7+/v7+/z8/Pz8/f39/f39/f3+/v7+/v7K6J1dAAACHklEQVQ4y2NgwAoYWdi5uLm5GXHIcrLCmMzYpDmAhKCKjoGtp40MFhVsDAwSxmmVEzZu2XvqSLkchjw3g0h445Ybd24vmTN1Usd5X3R5DgaNqgN35sycP2/GxMkTMRVwMOivvtO3YsWUm3duX790EcMKdgbNNXdnnJh1+9T6ipzU+FB0RzIyiFYB5WdfaElUF8TmTQ6GwH39J2bvypMHcpg4MAKKkUGo5s6KWRfyGRh4WJClGEGBCgS8DLobliy/3abMwM8NBYwQjXDgf3ryxOspyKYyg+RFTFwdnYDAzbrw+oLFm9Ot3J3AwNHFTBykQrhg++GDh48cOXzk4P6VZy8s230MyAGCwwcP7iyRBJpiur1n8hQIWHX27NkLi6bAwOSuow5ABeY7OydOhoCFIAULe6E8YFCf8QAqEC86evniZTA4tfLsuRXHr0E4ly9ePF0uC3KnpH1MZBQQxPoVgxyZ5RMdBQaRMc6yIEcihWbQGaA3k9G8CfQoN0pAtSoxCMACihk9qGtBQZ2LHtRIkRUMiqwd2TJADiswsrjQlAGju/o+MLrPNkWo8mFN1ewMWmvBCebQ0rKMJG87QzF0FRwMRuvugpLcrXu3rp7Zs61UCtMZ2nVHbk+fMX/+jMmTp3Sf9MLiULG45q237txaPG3yxPYrYQzYMo60RWbD3E27Ll68Uq+AK+uJqOlZBiSEKGLNnMA0iDfzwrI/NKgBOivk9piPdtUAAAAASUVORK5CYII="
  }), /*#__PURE__*/createElement("a", {
    href: "https://markmap.js.org/"
  }, "markmap"));
}

function renderItem(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onClick = _ref.onClick;
  return /*#__PURE__*/createElement("div", {
    className: "mm-toolbar-item",
    title: title,
    innerHTML: content,
    onClick: onClick
  });
}

var promise;

function safeCaller(fn) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!promise) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            promise = fn.apply(void 0, _args);
            _context.prev = 3;
            _context.next = 6;
            return promise;

          case 6:
            _context.prev = 6;
            promise = null;
            return _context.finish(6);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3,, 6, 9]]);
  }));
}

var Toolbar = /*#__PURE__*/function () {
  function Toolbar() {
    _classCallCheck(this, Toolbar);

    this.showBrand = true;
    this.registry = {};
    this.markmap = null;
    this.items = ['zoomIn', 'zoomOut', 'fit'];
    this.register({
      id: 'zoomIn',
      title: 'Zoom in',
      content: Toolbar.icon('M10 6 v8 M6 10 h8'),
      onClick: this.getHandler(function (mm) {
        return mm.rescale(1.25);
      })
    });
    this.register({
      id: 'zoomOut',
      title: 'Zoom out',
      content: Toolbar.icon('M6 10 h8'),
      onClick: this.getHandler(function (mm) {
        return mm.rescale(0.8);
      })
    });
    this.register({
      id: 'fit',
      title: 'Fit window size',
      content: Toolbar.icon('M4 8 h3 v-3 M4 12 h3 v3 M16 8 h-3 v-3 M16 12 h-3 v3'),
      onClick: this.getHandler(function (mm) {
        return mm.fit();
      })
    });
  }

  _createClass(Toolbar, [{
    key: "setBrand",
    value: function setBrand(show) {
      this.showBrand = show;
    }
  }, {
    key: "register",
    value: function register(data) {
      this.registry[data.id] = data;
    }
  }, {
    key: "getHandler",
    value: function getHandler(handle) {
      var _this = this;

      handle = safeCaller(handle);
      return function (e) {
        if (_this.markmap) handle(_this.markmap);
      };
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      this.items = _toConsumableArray(items);
    }
  }, {
    key: "attach",
    value: function attach(mm) {
      this.markmap = mm;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.items.map(function (item) {
        if (typeof item === 'string') {
          var data = _this2.registry[item];
          if (!data) console.warn("[markmap-toolbar] ".concat(item, " not found"));
          return data;
        }

        return item;
      }).filter(Boolean);
      return /*#__PURE__*/createElement("div", {
        className: "mm-toolbar"
      }, this.showBrand && renderBrand(), items.map(renderItem));
    }
  }], [{
    key: "create",
    value: function create(mm) {
      var toolbar = new Toolbar();
      toolbar.attach(mm);
      return toolbar.render();
    }
  }, {
    key: "icon",
    value: function icon(path) {
      return "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" on:click={onZoomIn}><path fill=\"none\" stroke-width=\"2\" stroke=\"currentColor\" d=\"".concat(path, "\"/></svg>");
    }
  }]);

  return Toolbar;
}();

/* src/components/modal.svelte generated by Svelte v3.35.0 */

function create_if_block(ctx) {
	let div3;
	let div0;
	let t0;
	let div2;
	let t1;
	let div1;
	let current;
	let mounted;
	let dispose;
	let if_block = /*title*/ ctx[1] && create_if_block_1(ctx);
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			div3 = element("div");
			div0 = element("div");
			t0 = space();
			div2 = element("div");
			if (if_block) if_block.c();
			t1 = space();
			div1 = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (if_block) if_block.l(div2_nodes);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "modal-backdrop");
			attr(div1, "class", "text-sm");
			attr(div2, "class", "modal-content");
			attr(div3, "class", "modal");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div0);
			append(div3, t0);
			append(div3, div2);
			if (if_block) if_block.m(div2, null);
			append(div2, t1);
			append(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div0, "click", /*handleClose*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*title*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(div2, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div3);
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

// (18:4) {#if title}
function create_if_block_1(ctx) {
	let div;
	let t;

	return {
		c() {
			div = element("div");
			t = text(/*title*/ ctx[1]);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, /*title*/ ctx[1]);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "text-center text-lg font-semibold mb-2");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*title*/ 2) set_data(t, /*title*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment$1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*show*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*show*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*show*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { show = false } = $$props;
	let { title } = $$props;
	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch("close");
	}

	$$self.$$set = $$props => {
		if ("show" in $$props) $$invalidate(0, show = $$props.show);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [show, title, handleClose, $$scope, slots];
}

class Modal extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { show: 0, title: 1 });
	}
}

/* src/components/toolbar.svelte generated by Svelte v3.35.0 */

function create_default_slot(ctx) {
	let p;
	let t0;
	let t1;
	let div;
	let a0;
	let t2;
	let t3;
	let a1;
	let t4;
	let mounted;
	let dispose;

	return {
		c() {
			p = element("p");
			t0 = text("You should save them in Gist or other file services. Do you still want to continue?");
			t1 = space();
			div = element("div");
			a0 = element("a");
			t2 = text("Cancel");
			t3 = space();
			a1 = element("a");
			t4 = text("OK");
			this.h();
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "You should save them in Gist or other file services. Do you still want to continue?");
			p_nodes.forEach(detach);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a0 = claim_element(div_nodes, "A", {});
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "Cancel");
			a0_nodes.forEach(detach);
			t3 = claim_space(div_nodes);
			a1 = claim_element(div_nodes, "A", { class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "OK");
			a1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a1, "class", "text-gray-500");
			attr(div, "class", "modal-footer");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			insert(target, t1, anchor);
			insert(target, div, anchor);
			append(div, a0);
			append(a0, t2);
			append(div, t3);
			append(div, a1);
			append(a1, t4);

			if (!mounted) {
				dispose = [
					listen(a0, "click", prevent_default(/*handleCancel*/ ctx[2])),
					listen(a1, "click", prevent_default(/*handleGoToFullView*/ ctx[3]))
				];

				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(p);
			if (detaching) detach(t1);
			if (detaching) detach(div);
			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let div_class_value;
	let t;
	let modal;
	let current;

	modal = new Modal({
			props: {
				show: /*showConfirm*/ ctx[1],
				title: "Your changes will be lost!",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	modal.$on("close", /*handleCancel*/ ctx[2]);

	return {
		c() {
			div = element("div");
			t = space();
			create_component(modal.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach);
			t = claim_space(nodes);
			claim_component(modal.$$.fragment, nodes);
			this.h();
		},
		h() {
			attr(div, "class", div_class_value = /*$$props*/ ctx[4].class);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			/*div_binding*/ ctx[9](div);
			insert(target, t, anchor);
			mount_component(modal, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*$$props*/ 16 && div_class_value !== (div_class_value = /*$$props*/ ctx[4].class)) {
				attr(div, "class", div_class_value);
			}

			const modal_changes = {};
			if (dirty & /*showConfirm*/ 2) modal_changes.show = /*showConfirm*/ ctx[1];

			if (dirty & /*$$scope*/ 8192) {
				modal_changes.$$scope = { dirty, ctx };
			}

			modal.$set(modal_changes);
		},
		i(local) {
			if (current) return;
			transition_in(modal.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(modal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			/*div_binding*/ ctx[9](null);
			if (detaching) detach(t);
			destroy_component(modal, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let el;
	let { mm } = $$props;
	let { dirty } = $$props;
	let { showBrand = false } = $$props;
	let { isFull = false } = $$props;
	let showConfirm = false;
	const toolbar = new Toolbar();
	toolbar.setBrand(showBrand);

	toolbar.register({
		id: "repl",
		title: "Open in REPL",
		content: Toolbar.icon("M5 6 v8 h10 v-8 h-10 z m5 0 v8"),
		onClick: handleREPL
	});

	toolbar.register({
		id: "full",
		title: "Full page view",
		content: Toolbar.icon("M5 9 v-3 h3 M5 11 v3 h3 M15 9 v-3 h-3 M15 11 v3 h-3"),
		onClick: handleFullPageView
	});

	toolbar.setItems(["zoomIn", "zoomOut", "fit", isFull ? "repl" : "full"]);

	onMount(() => {
		el.append(toolbar.render());
	});

	function handleFullPageView() {
		if (dirty) {
			$$invalidate(1, showConfirm = true);
		} else {
			handleGoToFullView();
		}
	}

	function handleCancel() {
		$$invalidate(1, showConfirm = false);
	}

	function handleGoToFullView() {
		_goto("/full" + window.location.hash);
	}

	function handleREPL() {
		_goto("/repl" + window.location.hash);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("mm" in $$new_props) $$invalidate(5, mm = $$new_props.mm);
		if ("dirty" in $$new_props) $$invalidate(6, dirty = $$new_props.dirty);
		if ("showBrand" in $$new_props) $$invalidate(7, showBrand = $$new_props.showBrand);
		if ("isFull" in $$new_props) $$invalidate(8, isFull = $$new_props.isFull);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*mm*/ 32) {
			toolbar.attach(mm);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		el,
		showConfirm,
		handleCancel,
		handleGoToFullView,
		$$props,
		mm,
		dirty,
		showBrand,
		isFull,
		div_binding
	];
}

class Toolbar_1 extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { mm: 5, dirty: 6, showBrand: 7, isFull: 8 });
	}
}

var DEFAULT_FILENAME = 'markmap.md';
var DEFAULT_DATA = 'https://gist.githubusercontent.com/gera2ld/af76a4c245b302206b16aec503dbe07b/raw/0526a14d700236e614ad3e8a1f131e5bca02ee7b/markmap.md';

function escapeHtml(text) {
  return text.replace(/[<&]/g, function (m) {
    return {
      '<': '&lt;',
      '&': '&amp;'
    }[m];
  });
}

function validateResponse(res) {
  if (!res.ok) throw new TypeError("Failed to fetch, got response \"".concat(res.status, " ").concat(res.statusText, "\""));
  return res;
}

function loadGitHubGist(_x, _x2) {
  return _loadGitHubGist.apply(this, arguments);
}

function _loadGitHubGist() {
  _loadGitHubGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, filename) {
    var res, data, file, content, _res;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://api.github.com/gists/".concat(key), {
              headers: {
                Accept: 'application/vnd.github.v3+json'
              }
            });

          case 2:
            res = _context3.sent;
            validateResponse(res);
            _context3.next = 6;
            return res.json();

          case 6:
            data = _context3.sent;
            file = data.files[filename];

            if (file) {
              _context3.next = 10;
              break;
            }

            throw new Error("".concat(filename, " not found in gist"));

          case 10:
            content = file.content;

            if (!file.truncated) {
              _context3.next = 18;
              break;
            }

            _context3.next = 14;
            return fetch(file.raw_url);

          case 14:
            _res = _context3.sent;
            _context3.next = 17;
            return _res.text();

          case 17:
            content = _context3.sent;

          case 18:
            return _context3.abrupt("return", content);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadGitHubGist.apply(this, arguments);
}

function loadGiteeGist(_x3, _x4) {
  return _loadGiteeGist.apply(this, arguments);
}

function _loadGiteeGist() {
  _loadGiteeGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, filename) {
    var res, data, file, content, _res2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("https://gitee.com/api/v5/gists/".concat(key));

          case 2:
            res = _context4.sent;
            validateResponse(res);
            _context4.next = 6;
            return res.json();

          case 6:
            data = _context4.sent;
            file = data.files[filename];

            if (file) {
              _context4.next = 10;
              break;
            }

            throw new Error("".concat(filename, " not found in gist"));

          case 10:
            content = file.content;

            if (!file.truncated) {
              _context4.next = 18;
              break;
            }

            _context4.next = 14;
            return fetch(file.raw_url);

          case 14:
            _res2 = _context4.sent;
            _context4.next = 17;
            return _res2.text();

          case 17:
            content = _context4.sent;

          case 18:
            return _context4.abrupt("return", content);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadGiteeGist.apply(this, arguments);
}

function loadFromGist(gist) {
  var _gist$match = gist.match(/^(?:(\w+):)?(\w+)(?:\/(.*))?$|/),
      _gist$match2 = _slicedToArray(_gist$match, 4),
      source = _gist$match2[1],
      key = _gist$match2[2],
      pathname = _gist$match2[3];

  if (!key) throw new Error("Invalid gist: ".concat(gist));
  var filename = pathname || DEFAULT_FILENAME;

  if (source === 'gitee') {
    return loadGiteeGist(key, filename);
  }

  if (source === 'gist') {
    return loadGitHubGist(key, filename);
  }

  throw new Error("Unknown service: ".concat(source));
}

function loadFromURL(_x5) {
  return _loadFromURL.apply(this, arguments);
}

function _loadFromURL() {
  _loadFromURL = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url) {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch(url);

          case 2:
            res = _context5.sent;
            validateResponse(res);
            return _context5.abrupt("return", res.text());

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loadFromURL.apply(this, arguments);
}

function memoizeLast(fn) {
  var cache;
  return function memoized() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = args.join('\n');

    if (!cache || cache.key !== key) {
      cache = {
        key: key,
        value: fn.apply(void 0, args)
      };
    }

    return cache.value;
  };
}

var loadData = memoizeLast( /*#__PURE__*/function () {
  var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(d) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!/^https?:/.test(d)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", loadFromURL(d));

          case 2:
            return _context.abrupt("return", loadFromGist(d));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function loadData(_x6) {
    return _loadData.apply(this, arguments);
  }

  return loadData;
}());

function getHashHandler(update) {
  var lastSession;

  function handleHashChange() {
    return _handleHashChange.apply(this, arguments);
  }

  function _handleHashChange() {
    _handleHashChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var session, hq, gist, d, hash, error, text;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              session = {};
              lastSession = session;
              hq = new URLSearchParams(window.location.hash.slice(1));
              gist = hq.get('gist');
              d = hq.get('d');

              if (!(gist && !d)) {
                _context2.next = 12;
                break;
              }

              if (!gist.includes(':')) gist = "gist:".concat(gist);
              hash = "#?d=".concat(gist);
              _context2.next = 10;
              return Promise.resolve();

            case 10:
              window.location.hash = hash;
              return _context2.abrupt("return");

            case 12:
              _context2.prev = 12;
              _context2.next = 15;
              return loadData(d || DEFAULT_DATA);

            case 15:
              text = _context2.sent;
              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](12);
              error = _context2.t0;

            case 21:
              if (!(session === lastSession)) {
                _context2.next = 29;
                break;
              }

              if (text) update(text);

              if (!error) {
                _context2.next = 29;
                break;
              }

              if (!(error.name === 'TypeError' && /failed to fetch/i.test(error.message))) {
                _context2.next = 28;
                break;
              }

              showToast({
                title: 'Failed to fetch',
                html: ['<div class="mt-1">Please check your network and resource</div>', d && "<div class=\"mt-1 text-xs text-gray-600\">".concat(escapeHtml(d), "</div>")].filter(Boolean).join('')
              });
              _context2.next = 29;
              break;

            case 28:
              throw error;

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[12, 18]]);
    }));
    return _handleHashChange.apply(this, arguments);
  }

  return handleHashChange;
}

function subscribeHash(update) {
  var handler = getHashHandler(update);
  window.addEventListener('hashchange', handler);
  handler(update);
  return function () {
    return window.removeEventListener('hashchange', handler);
  };
}

function parseGitHubGistURL(url) {
  // GitHub Gist
  // https://gist.github.com/gera2ld/af76a4c245b302206b16aec503dbe07b
  if (url.origin !== 'https://gist.github.com') return;
  var matches = url.pathname.match(/^\/[^/]+\/(\w+)$/);
  if (!matches) return;
  var file = url.hash ? "/".concat(url.hash.slice(1)) : '';
  var d = "gist:".concat(matches[1]).concat(file);
  return {
    type: 'GitHub Gist',
    d: d
  };
}

function parseGiteeGistURL(url) {
  // Gitee Gist
  // https://gitee.com/gerald/codes/a73wgucr28dhlxp91kytm57
  if (url.origin !== 'https://gitee.com') return;
  var matches = url.pathname.match(/^\/[^/]+\/codes\/(\w+)$/);
  if (!matches) return;
  var file = url.hash ? "/".concat(url.hash.slice(1)) : '';
  var d = "gitee:".concat(matches[1]).concat(file);
  return {
    type: 'Gitee Gist',
    d: d
  };
}

function parseNormalURL(url) {
  var d = encodeURIComponent(url);
  return {
    type: 'URL',
    d: d
  };
}

var parsers = [parseGitHubGistURL, parseGiteeGistURL, parseNormalURL];
function parseURL(url) {
  try {
    url = new URL(url);

    var _iterator = _createForOfIteratorHelper(parsers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var parse = _step.value;
        var result = parse(url);
        if (result) return result;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } catch (err) {
    console.error(err); // noop
  }
}

export { Modal as M, Toolbar_1 as T, loadData as l, parseURL as p, subscribeHash as s };
