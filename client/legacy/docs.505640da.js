import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, b as claim_element, g as children, d as detach, k as attr, H as set_style, m as insert, l as append, t as text, a as space, h as claim_text, f as claim_space, I as toggle_class, J as set_data, K as destroy_each, c as create_component, q as query_selector_all, j as claim_component, L as HtmlTag, n as mount_component, M as listen, o as transition_in, p as transition_out, r as destroy_component, N as stores$1, O as component_subscribe, u as onMount, v as binding_callbacks } from './client.d6d41c36.js';
import { l as loadJS } from './markmap.9f83cc0e.js';
import { F as Footer } from './footer.e36040f8.js';
import './web.url.4d8a464f.js';

var docs = "<p>This project is heavily inspired by <a href=\"https://github.com/dundalek/markmap\">dundalek&#39;s markmap</a>.</p>\n<h2 id=\"introduction\">Introduction</h2>\n<h3 id=\"what-is-markmap\">What is markmap?</h3>\n<p>Markmap is a combination of markdown and mindmap. It parses markdown content and extract its intrinsic hierarchical structure and renders an interactive mindmap, aka markmap.</p>\n<p>The easiest way to use it is to load your markdown content to the <a href=\"/repl\">try it out</a> 👉 page and see your markmap on the right.</p>\n<p>You can also try it in:</p>\n<ul>\n<li><a href=\"https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode\">VSCode</a> 🚀</li>\n<li>command-line: see <a href=\"#markmap-cli\">markmap-cli</a> 👇</li>\n<li>Vim / Neovim: see <a href=\"#coc-markmap\">coc-markmap</a> 👇</li>\n</ul>\n<h2 id=\"projects\">Projects</h2>\n<h3 id=\"markmap-lib\">markmap-lib</h3>\n<p><img src=\"https://img.shields.io/npm/v/markmap-lib.svg\" alt=\"NPM\"></p>\n<p>Transform Markdown to data used by markmap.</p>\n<h4 id=\"installation\">Installation</h4>\n<pre><code class=\"language-sh\">$ yarn add markmap-lib\n</code></pre>\n<h4 id=\"usage\">Usage</h4>\n<p>Parse markdown and create a node tree, return the root node and a <code>features</code> object containing the active features during parsing.</p>\n<p>Transform Markdown to markmap data:</p>\n<pre><code class=\"language-js\">import { Transformer } from &#39;markmap-lib&#39;;\n\nconst transformer = new Transformer();\n\n// 1. transform markdown\nconst { root, features } = transformer.transform(markdown);\n\n// 2. get assets\n// either get assets required by used features\nconst { styles, scripts } = transformer.getUsedAssets(features);\n// or get all possible assets that could be used later\nconst { styles, scripts } = transformer.getAssets(features);\n</code></pre>\n<p>Now we have the data for rendering. See <a href=\"#markmap-view\">markmap-view</a> 👇 for how to use them.</p>\n<h3 id=\"markmap-view\">markmap-view</h3>\n<p><img src=\"https://img.shields.io/npm/v/markmap-view.svg\" alt=\"NPM\"></p>\n<p>Render a markmap from transformed data.</p>\n<h4 id=\"installation-1\">Installation</h4>\n<pre><code class=\"language-sh\">$ yarn add markmap-view\n</code></pre>\n<h4 id=\"usage-1\">Usage</h4>\n<p>Create an SVG element with explicit width and height:</p>\n<pre><code class=\"language-html\">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/d3@6&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-view&quot;&gt;&lt;/script&gt;\n\n&lt;svg id=&quot;markmap&quot; style=&quot;width: 800px; height: 800px&quot;&gt;&lt;/svg&gt;\n</code></pre>\n<p>We got <code>{ root }</code> from transforming, and possible extraneous assets <code>{ styles, scripts }</code>.</p>\n<p>Now we can render a markmap to the SVG element:</p>\n<pre><code class=\"language-js\">// load with &lt;script&gt;\nconst { markmap } = window;\n// or with ESM\nimport * as markmap from &#39;markmap-view&#39;;\n\nconst { Markmap, loadCSS, loadJS } = markmap;\n\n// 1. load assets\nif (styles) loadCSS(styles);\nif (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n\n// 2. create markmap\n// `options` is optional, i.e. `undefined` can be passed here\nMarkmap.create(&#39;#markmap&#39;, options, root);\n</code></pre>\n<p>The first argument of <code>Markmap.create</code> can also be an actual SVG element, for example:</p>\n<pre><code class=\"language-js\">const svgEl = document.querySelector(&#39;#markmap&#39;);\nMarkmap.create(svgEl, options, data);\n</code></pre>\n<h3 id=\"markmap-cli\">markmap-cli</h3>\n<p><img src=\"https://img.shields.io/npm/v/markmap-cli.svg\" alt=\"NPM\"></p>\n<p>Use markmap command-line in a local terminal.</p>\n<h4 id=\"usage-2\">Usage</h4>\n<pre><code class=\"language-sh\">$ npx markmap-cli markmap.md\n</code></pre>\n<p>You can also install it globally:</p>\n<pre><code class=\"language-sh\">$ yarn global add markmap-cli\n$ markmap markmap.md\n</code></pre>\n<p>There is a watch mode so that you could edit the Markdown file and get updates on the fly:</p>\n<pre><code class=\"language-sh\">$ markmap -w markmap.md\n</code></pre>\n<h3 id=\"coc-markmap\">coc-markmap</h3>\n<p><img src=\"https://img.shields.io/npm/v/coc-markmap.svg\" alt=\"NPM\"></p>\n<h4 id=\"installation-2\">Installation</h4>\n<p>Make sure <a href=\"https://github.com/neoclide/coc.nvim\">coc.nvim</a> is started.</p>\n<p>Then install with the Vim command:</p>\n<pre><code>:CocInstall coc-markmap\n</code></pre>\n<h4 id=\"usage-3\">Usage</h4>\n<p>Open a Markdown file in Vim / Neovim, and execute:</p>\n<pre><code class=\"language-viml\">:CocCommand markmap.create\n</code></pre>\n<p>An HTML file with the same basename as the Markdown file will be created and opened in your default browser.</p>\n<p>Visualization of selected text is also supported.</p>\n<h2 id=\"migration-notes\">Migration notes</h2>\n<h3 id=\"010x---011x\">0.10.x -&gt; 0.11.x</h3>\n<p>There is a transformer instance now:</p>\n<pre><code class=\"language-diff\">- import { transform, getUsedAssets, getAssets, fillTemplate } from &#39;markmap-lib&#39;;\n+ import { Transformer, fillTemplate } from &#39;markmap-lib&#39;;\n\n+ const transformer = new Transformer();\n\n- const { root, features } = transform(markdown);\n+ const { root, features } = transformer.transform(markdown);\n\n- const { styles, scripts } = getUsedAssets(features);\n+ const { styles, scripts } = transformer.getUsedAssets(features);\n  // or\n- const { styles, scripts } = getAssets();\n+ const { styles, scripts } = transformer.getAssets();\n</code></pre>\n<h3 id=\"09x---010x\">0.9.x -&gt; 0.10.x</h3>\n<p>The entrance has changed:</p>\n<pre><code class=\"language-diff\">- import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n- import { fillTemplate } from &#39;markmap-lib/dist/template&#39;;\n+ import { transform, getUsedAssets, getAssets, fillTemplate } from &#39;markmap-lib&#39;;\n\n- import * as markmap from &#39;markmap-lib/dist/view&#39;;\n- import { Markmap, loadCSS, loadJS } from &#39;markmap-lib/dist/view&#39;;\n+ import * as markmap from &#39;markmap-view&#39;;\n+ import { Markmap, loadCSS, loadJS } from &#39;markmap-view&#39;;\n</code></pre>\n<h3 id=\"08x---09x\">0.8.x -&gt; 0.9.x</h3>\n<p>In 0.9.x the plugins at rendering time are removed in favor of the transforming plugins. As a result, the generated markmap can be loaded faster with less overhead and hopefully without flash of untranspiled code. The transforming plugins are enabled on demand, i.e. when the markdown content is detected to have the feature included.</p>\n<p>So the changes are:</p>\n<h4 id=\"transforming\">Transforming</h4>\n<p>We get both the root node and a map of used features. Then we get the assets list for future usage.</p>\n<pre><code class=\"language-diff\">- import { transform } from &#39;markmap-lib/dist/transform&#39;;\n+ import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n\n- const root = transform(markdown);\n+ const { root, features } = transform(markdown);\n\n+ const assets = getUsedAssets(features);\n+ // or just get all possible assets if the content may change in the future\n+ const assets = getAssets();\n</code></pre>\n<h4 id=\"filling-the-template\">Filling the template</h4>\n<p>We need to inject the extraneous assets required by plugins to the output.</p>\n<pre><code class=\"language-diff\">  import { fillTemplate } from &#39;markmap-lib/dist/template&#39;;\n\n- const html = fillTemplate(root);\n+ const html = fillTemplate(root, assets);\n</code></pre>\n<h4 id=\"render\">Render</h4>\n<p>We don&#39;t need to load the view plugins any more, but we&#39;ll have to include the assets if plugin features are used.</p>\n<pre><code class=\"language-diff\">- import { Markmap, loadPlugins } from &#39;markmap-lib/dist/view&#39;;\n+ import * as markmap from &#39;markmap-lib/dist/view&#39;;\n+ import { Markmap, loadCSS, loadJS } from &#39;markmap-lib/dist/view&#39;;\n\n+ const { styles, scripts } = assets;\n+ if (styles) loadCSS(styles);\n+ if (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n\n- loadPlugins([\n-   &#39;mathJax&#39;,\n-   &#39;prism&#39;,\n- ])\n- .then(() =&gt; {\n    Markmap.create(&#39;#markmap&#39;, null, data);\n- });\n</code></pre>\n<p>Note that the scripts may want to access <code>markmap</code> module, so we should export a <code>getMarkmap</code> method to <code>loadScript</code>. However this can be omitted if your markmap library is loaded from CDN and can be accessed via <code>window.markmap</code>.</p>\n<pre><code class=\"language-diff\">+ &lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-lib/dist/browser/view.min.js&quot;&gt;&lt;/script&gt;\n</code></pre>\n<pre><code class=\"language-diff\">  console.log(window.markmap); // -&gt; the markmap object\n- if (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n+ if (scripts) loadJS(scripts);\n</code></pre>\n";

/* src/routes/docs.svelte generated by Svelte v3.35.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (70:2) {#if headings}
function create_if_block(ctx) {
	let aside;
	let ul;
	let each_value = /*headings*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			aside = element("aside");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true, style: true });
			var aside_nodes = children(aside);
			ul = claim_element(aside_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			aside_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(ul, "class", "toc");
			attr(aside, "class", "bg-gray-100 p-4 hidden lg:block overflow-auto");
			set_style(aside, "width", "240px");
		},
		m(target, anchor) {
			insert(target, aside, anchor);
			append(aside, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*headings, $page, active*/ 14) {
				each_value = /*headings*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) detach(aside);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (73:8) {#each headings as heading}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*heading*/ ctx[7].title + "";
	let t0;
	let a_href_value;
	let t1;
	let li_class_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = "" + (/*$page*/ ctx[3].path + "#" + /*heading*/ ctx[7].id));
			toggle_class(a, "active", /*heading*/ ctx[7] === /*active*/ ctx[2]);
			attr(li, "class", li_class_value = "toc-item toc-" + /*heading*/ ctx[7].depth);
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t0);
			append(li, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*headings*/ 2 && t0_value !== (t0_value = /*heading*/ ctx[7].title + "")) set_data(t0, t0_value);

			if (dirty & /*$page, headings*/ 10 && a_href_value !== (a_href_value = "" + (/*$page*/ ctx[3].path + "#" + /*heading*/ ctx[7].id))) {
				attr(a, "href", a_href_value);
			}

			if (dirty & /*headings, active*/ 6) {
				toggle_class(a, "active", /*heading*/ ctx[7] === /*active*/ ctx[2]);
			}

			if (dirty & /*headings*/ 2 && li_class_value !== (li_class_value = "toc-item toc-" + /*heading*/ ctx[7].depth)) {
				attr(li, "class", li_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

function create_fragment(ctx) {
	let meta;
	let t0;
	let main_1;
	let t1;
	let div;
	let html_tag;
	let t2;
	let footer;
	let current;
	let mounted;
	let dispose;
	let if_block = /*headings*/ ctx[1] && create_if_block(ctx);
	footer = new Footer({});

	return {
		c() {
			meta = element("meta");
			t0 = space();
			main_1 = element("main");
			if (if_block) if_block.c();
			t1 = space();
			div = element("div");
			t2 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1m2buf9\"]", document.head);
			meta = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			main_1 = claim_element(nodes, "MAIN", { class: true });
			var main_1_nodes = children(main_1);
			if (if_block) if_block.l(main_1_nodes);
			t1 = claim_space(main_1_nodes);
			div = claim_element(main_1_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t2 = claim_space(div_nodes);
			claim_component(footer.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			main_1_nodes.forEach(detach);
			this.h();
		},
		h() {
			document.title = "markmap docs";
			attr(meta, "name", "Description");
			attr(meta, "content", "The documentation of markmap packages.");
			html_tag = new HtmlTag(t2);
			attr(div, "class", "markdown flex-1 min-w-0 p-4 lg:pr-12 overflow-auto");
			attr(main_1, "class", "flex md:fs");
		},
		m(target, anchor) {
			append(document.head, meta);
			insert(target, t0, anchor);
			insert(target, main_1, anchor);
			if (if_block) if_block.m(main_1, null);
			append(main_1, t1);
			append(main_1, div);
			html_tag.m(docs, div);
			append(div, t2);
			mount_component(footer, div, null);
			/*div_binding*/ ctx[6](div);
			current = true;

			if (!mounted) {
				dispose = listen(div, "scroll", /*handleScroll*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*headings*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(main_1, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			detach(meta);
			if (detaching) detach(t0);
			if (detaching) detach(main_1);
			if (if_block) if_block.d();
			destroy_component(footer);
			/*div_binding*/ ctx[6](null);
			mounted = false;
			dispose();
		}
	};
}

const loading = loadJS([
	{
		type: "script",
		data: {
			src: "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js"
		}
	},
	// components will be added by paths relative to path of autoloader
	{
		type: "script",
		data: {
			src: "https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js"
		}
	}
]);

function instance($$self, $$props, $$invalidate) {
	let $page;
	const { page } = stores$1();
	component_subscribe($$self, page, value => $$invalidate(3, $page = value));
	let main;
	let headings;
	let active;

	function handleScroll() {
		if (!headings) return;
		let last;

		for (const heading of headings) {
			const rect = heading.el.getBoundingClientRect();
			if (rect.top > 100) break;
			last = heading;
		}

		$$invalidate(2, active = last || headings[0]);
	}

	onMount(async () => {
		main.querySelectorAll("a[href]").forEach(el => {
			const href = el.getAttribute("href");
			if (href.startsWith("#")) el.href = $page.path + href;
		});

		$$invalidate(1, headings = Array.from(main.querySelectorAll("h1,h2,h3,h4,h5,h6"), el => {
			return {
				el,
				id: el.id,
				title: el.textContent,
				depth: +el.tagName.toLowerCase().slice(1)
			};
		}));

		handleScroll();
		await loading;
		window.Prism.highlightAllUnder(main);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			main = $$value;
			$$invalidate(0, main);
		});
	}

	return [main, headings, active, $page, page, handleScroll, div_binding];
}

class Docs extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Docs;
