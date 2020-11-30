function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-home.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneHomeJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5l5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/highlight.js/lib/highlight.js":
  /*!****************************************************!*\
    !*** ./node_modules/highlight.js/lib/highlight.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibHighlightJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Syntax highlighting with language autodetection.
    https://highlightjs.org/
    */


    (function (factory) {
      // Find the global object for export to both the browser and web workers.
      var globalObject = typeof window === 'object' && window || typeof self === 'object' && self; // Setup highlight.js for different environments. First is Node.js or
      // CommonJS.
      // `nodeType` is checked to ensure that `exports` is not a HTML element.

      if (true && !exports.nodeType) {
        factory(exports);
      } else if (globalObject) {
        // Export hljs globally even when using AMD for cases when this script
        // is loaded with others that may still expect a global hljs.
        globalObject.hljs = factory({}); // Finally register the global hljs with AMD.

        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return globalObject.hljs;
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      }
    })(function (hljs) {
      // Convenience variables for build-in objects
      var ArrayProto = [],
          objectKeys = Object.keys; // Global internal variables used within the highlight.js library.

      var languages = {},
          aliases = {}; // safe/production mode - swallows more errors, tries to keep running
      // even if a single syntax or parse hits a fatal error

      var SAFE_MODE = true; // Regular expressions used throughout the highlight.js library.

      var noHighlightRe = /^(no-?highlight|plain|text)$/i,
          languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
          fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm; // The object will be assigned by the build tool. It used to synchronize API
      // of external language files with minified version of the highlight.js library.

      var API_REPLACES;
      var spanEndTag = '</span>';
      var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?"; // Global options used when within external APIs. This is modified when
      // calling the `hljs.configure` function.

      var options = {
        classPrefix: 'hljs-',
        tabReplace: null,
        useBR: false,
        languages: undefined
      }; // keywords that should have no default relevance value

      var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');
      /* Utility functions */

      function escape(value) {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      function tag(node) {
        return node.nodeName.toLowerCase();
      }

      function testRe(re, lexeme) {
        var match = re && re.exec(lexeme);
        return match && match.index === 0;
      }

      function isNotHighlighted(language) {
        return noHighlightRe.test(language);
      }

      function blockLanguage(block) {
        var i, match, length, _class;

        var classes = block.className + ' ';
        classes += block.parentNode ? block.parentNode.className : ''; // language-* takes precedence over non-prefixed class names.

        match = languagePrefixRe.exec(classes);

        if (match) {
          var language = getLanguage(match[1]);

          if (!language) {
            console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            console.warn("Falling back to no-highlight mode for this block.", block);
          }

          return language ? match[1] : 'no-highlight';
        }

        classes = classes.split(/\s+/);

        for (i = 0, length = classes.length; i < length; i++) {
          _class = classes[i];

          if (isNotHighlighted(_class) || getLanguage(_class)) {
            return _class;
          }
        }
      }
      /**
       * performs a shallow merge of multiple objects into one
       *
       * @arguments list of objects with properties to merge
       * @returns a single new object
       */


      function inherit(parent) {
        // inherit(parent, override_obj, override_obj, ...)
        var key;
        var result = {};
        var objects = Array.prototype.slice.call(arguments, 1);

        for (key in parent) {
          result[key] = parent[key];
        }

        objects.forEach(function (obj) {
          for (key in obj) {
            result[key] = obj[key];
          }
        });
        return result;
      }
      /* Stream merging */


      function nodeStream(node) {
        var result = [];

        (function _nodeStream(node, offset) {
          for (var child = node.firstChild; child; child = child.nextSibling) {
            if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
              result.push({
                event: 'start',
                offset: offset,
                node: child
              });
              offset = _nodeStream(child, offset); // Prevent void elements from having an end tag that would actually
              // double them in the output. There are more void elements in HTML
              // but we list only those realistically expected in code display.

              if (!tag(child).match(/br|hr|img|input/)) {
                result.push({
                  event: 'stop',
                  offset: offset,
                  node: child
                });
              }
            }
          }

          return offset;
        })(node, 0);

        return result;
      }

      function mergeStreams(original, highlighted, value) {
        var processed = 0;
        var result = '';
        var nodeStack = [];

        function selectStream() {
          if (!original.length || !highlighted.length) {
            return original.length ? original : highlighted;
          }

          if (original[0].offset !== highlighted[0].offset) {
            return original[0].offset < highlighted[0].offset ? original : highlighted;
          }
          /*
          To avoid starting the stream just before it should stop the order is
          ensured that original always starts first and closes last:
           if (event1 == 'start' && event2 == 'start')
            return original;
          if (event1 == 'start' && event2 == 'stop')
            return highlighted;
          if (event1 == 'stop' && event2 == 'start')
            return original;
          if (event1 == 'stop' && event2 == 'stop')
            return highlighted;
           ... which is collapsed to:
          */


          return highlighted[0].event === 'start' ? original : highlighted;
        }

        function open(node) {
          function attr_str(a) {
            return ' ' + a.nodeName + '="' + escape(a.value).replace(/"/g, '&quot;') + '"';
          }

          result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
        }

        function close(node) {
          result += '</' + tag(node) + '>';
        }

        function render(event) {
          (event.event === 'start' ? open : close)(event.node);
        }

        while (original.length || highlighted.length) {
          var stream = selectStream();
          result += escape(value.substring(processed, stream[0].offset));
          processed = stream[0].offset;

          if (stream === original) {
            /*
            On any opening or closing tag of the original markup we first close
            the entire highlighted node stack, then render the original tag along
            with all the following original tags at the same offset and then
            reopen all the tags on the highlighted stack.
            */
            nodeStack.reverse().forEach(close);

            do {
              render(stream.splice(0, 1)[0]);
              stream = selectStream();
            } while (stream === original && stream.length && stream[0].offset === processed);

            nodeStack.reverse().forEach(open);
          } else {
            if (stream[0].event === 'start') {
              nodeStack.push(stream[0].node);
            } else {
              nodeStack.pop();
            }

            render(stream.splice(0, 1)[0]);
          }
        }

        return result + escape(value.substr(processed));
      }
      /* Initialization */


      function dependencyOnParent(mode) {
        if (!mode) return false;
        return mode.endsWithParent || dependencyOnParent(mode.starts);
      }

      function expand_or_clone_mode(mode) {
        if (mode.variants && !mode.cached_variants) {
          mode.cached_variants = mode.variants.map(function (variant) {
            return inherit(mode, {
              variants: null
            }, variant);
          });
        } // EXPAND
        // if we have variants then essentially "replace" the mode with the variants
        // this happens in compileMode, where this function is called from


        if (mode.cached_variants) return mode.cached_variants; // CLONE
        // if we have dependencies on parents then we need a unique
        // instance of ourselves, so we can be reused with many
        // different parents without issue

        if (dependencyOnParent(mode)) return [inherit(mode, {
          starts: mode.starts ? inherit(mode.starts) : null
        })];
        if (Object.isFrozen(mode)) return [inherit(mode)]; // no special dependency issues, just return ourselves

        return [mode];
      }

      function restoreLanguageApi(obj) {
        if (API_REPLACES && !obj.langApiRestored) {
          obj.langApiRestored = true;

          for (var key in API_REPLACES) {
            if (obj[key]) {
              obj[API_REPLACES[key]] = obj[key];
            }
          }

          (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
        }
      }

      function compileKeywords(rawKeywords, case_insensitive) {
        var compiled_keywords = {};

        if (typeof rawKeywords === 'string') {
          // string
          splitAndCompile('keyword', rawKeywords);
        } else {
          objectKeys(rawKeywords).forEach(function (className) {
            splitAndCompile(className, rawKeywords[className]);
          });
        }

        return compiled_keywords; // ---

        function splitAndCompile(className, str) {
          if (case_insensitive) {
            str = str.toLowerCase();
          }

          str.split(' ').forEach(function (keyword) {
            var pair = keyword.split('|');
            compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
          });
        }
      }

      function scoreForKeyword(keyword, providedScore) {
        // manual scores always win over common keywords
        // so you can force a score of 1 if you really insist
        if (providedScore) return Number(providedScore);
        return commonKeyword(keyword) ? 0 : 1;
      }

      function commonKeyword(word) {
        return COMMON_KEYWORDS.indexOf(word.toLowerCase()) != -1;
      }

      function compileLanguage(language) {
        function reStr(re) {
          return re && re.source || re;
        }

        function langRe(value, global) {
          return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
        }

        function reCountMatchGroups(re) {
          return new RegExp(re.toString() + '|').exec('').length - 1;
        } // joinRe logically computes regexps.join(separator), but fixes the
        // backreferences so they continue to match.
        // it also places each individual regular expression into it's own
        // match group, keeping track of the sequencing of those match groups
        // is currently an exercise for the caller. :-)


        function joinRe(regexps, separator) {
          // backreferenceRe matches an open parenthesis or backreference. To avoid
          // an incorrect parse, it additionally matches the following:
          // - [...] elements, where the meaning of parentheses and escapes change
          // - other escape sequences, so we do not misparse escape sequences as
          //   interesting elements
          // - non-matching or lookahead parentheses, which do not capture. These
          //   follow the '(' with a '?'.
          var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
          var numCaptures = 0;
          var ret = '';

          for (var i = 0; i < regexps.length; i++) {
            numCaptures += 1;
            var offset = numCaptures;
            var re = reStr(regexps[i]);

            if (i > 0) {
              ret += separator;
            }

            ret += "(";

            while (re.length > 0) {
              var match = backreferenceRe.exec(re);

              if (match == null) {
                ret += re;
                break;
              }

              ret += re.substring(0, match.index);
              re = re.substring(match.index + match[0].length);

              if (match[0][0] == '\\' && match[1]) {
                // Adjust the backreference.
                ret += '\\' + String(Number(match[1]) + offset);
              } else {
                ret += match[0];

                if (match[0] == '(') {
                  numCaptures++;
                }
              }
            }

            ret += ")";
          }

          return ret;
        }

        function buildModeRegex(mode) {
          var matchIndexes = {};
          var matcherRe;
          var regexes = [];
          var matcher = {};
          var matchAt = 1;

          function addRule(rule, regex) {
            matchIndexes[matchAt] = rule;
            regexes.push([rule, regex]);
            matchAt += reCountMatchGroups(regex) + 1;
          }

          var term;

          for (var i = 0; i < mode.contains.length; i++) {
            var re;
            term = mode.contains[i];

            if (term.beginKeywords) {
              re = '\\.?(?:' + term.begin + ')\\.?';
            } else {
              re = term.begin;
            }

            addRule(term, re);
          }

          if (mode.terminator_end) addRule("end", mode.terminator_end);
          if (mode.illegal) addRule("illegal", mode.illegal);
          var terminators = regexes.map(function (el) {
            return el[1];
          });
          matcherRe = langRe(joinRe(terminators, '|'), true);
          matcher.lastIndex = 0;

          matcher.exec = function (s) {
            var rule;
            if (regexes.length === 0) return null;
            matcherRe.lastIndex = matcher.lastIndex;
            var match = matcherRe.exec(s);

            if (!match) {
              return null;
            }

            for (var i = 0; i < match.length; i++) {
              if (match[i] != undefined && matchIndexes["" + i] != undefined) {
                rule = matchIndexes["" + i];
                break;
              }
            } // illegal or end match


            if (typeof rule === "string") {
              match.type = rule;
              match.extra = [mode.illegal, mode.terminator_end];
            } else {
              match.type = "begin";
              match.rule = rule;
            }

            return match;
          };

          return matcher;
        }

        function compileMode(mode, parent) {
          if (mode.compiled) return;
          mode.compiled = true;
          mode.keywords = mode.keywords || mode.beginKeywords;
          if (mode.keywords) mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
          mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

          if (parent) {
            if (mode.beginKeywords) {
              mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
            }

            if (!mode.begin) mode.begin = /\B|\b/;
            mode.beginRe = langRe(mode.begin);
            if (mode.endSameAsBegin) mode.end = mode.begin;
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) mode.endRe = langRe(mode.end);
            mode.terminator_end = reStr(mode.end) || '';
            if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
          }

          if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
          if (mode.relevance == null) mode.relevance = 1;

          if (!mode.contains) {
            mode.contains = [];
          }

          mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
            return expand_or_clone_mode(c === 'self' ? mode : c);
          }));
          mode.contains.forEach(function (c) {
            compileMode(c, mode);
          });

          if (mode.starts) {
            compileMode(mode.starts, parent);
          }

          mode.terminators = buildModeRegex(mode);
        } // self is not valid at the top-level


        if (language.contains && language.contains.indexOf('self') != -1) {
          if (!SAFE_MODE) {
            throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
          } else {
            // silently remove the broken rule (effectively ignoring it), this has historically
            // been the behavior in the past, so this removal preserves compatibility with broken
            // grammars when running in Safe Mode
            language.contains = language.contains.filter(function (mode) {
              return mode != 'self';
            });
          }
        }

        compileMode(language);
      }
      /**
       * Core highlighting function.
       *
       * @param {string} languageName - the language to use for highlighting
       * @param {string} code - the code to highlight
       * @param {boolean} ignore_illegals - whether to ignore illegal matches, default is to bail
       * @param {array<mode>} continuation - array of continuation modes
       *
       * @returns an object that represents the result
       * @property {string} language - the language name
       * @property {number} relevance - the relevance score
       * @property {string} value - the highlighted HTML code
       * @property {mode} top - top of the current mode stack
       * @property {boolean} illegal - indicates whether any illegal matches were found
      */


      function highlight(languageName, code, ignore_illegals, continuation) {
        var codeToHighlight = code;

        function escapeRe(value) {
          return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
        }

        function endOfMode(mode, lexeme) {
          if (testRe(mode.endRe, lexeme)) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }

            return mode;
          }

          if (mode.endsWithParent) {
            return endOfMode(mode.parent, lexeme);
          }
        }

        function keywordMatch(mode, match) {
          var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
          return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
        }

        function buildSpan(className, insideSpan, leaveOpen, noPrefix) {
          if (!leaveOpen && insideSpan === '') return '';
          if (!className) return insideSpan;
          var classPrefix = noPrefix ? '' : options.classPrefix,
              openSpan = '<span class="' + classPrefix,
              closeSpan = leaveOpen ? '' : spanEndTag;
          openSpan += className + '">';
          return openSpan + insideSpan + closeSpan;
        }

        function processKeywords() {
          var keyword_match, last_index, match, result;
          if (!top.keywords) return escape(mode_buffer);
          result = '';
          last_index = 0;
          top.lexemesRe.lastIndex = 0;
          match = top.lexemesRe.exec(mode_buffer);

          while (match) {
            result += escape(mode_buffer.substring(last_index, match.index));
            keyword_match = keywordMatch(top, match);

            if (keyword_match) {
              relevance += keyword_match[1];
              result += buildSpan(keyword_match[0], escape(match[0]));
            } else {
              result += escape(match[0]);
            }

            last_index = top.lexemesRe.lastIndex;
            match = top.lexemesRe.exec(mode_buffer);
          }

          return result + escape(mode_buffer.substr(last_index));
        }

        function processSubLanguage() {
          var explicit = typeof top.subLanguage === 'string';

          if (explicit && !languages[top.subLanguage]) {
            return escape(mode_buffer);
          }

          var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined); // Counting embedded language score towards the host language may be disabled
          // with zeroing the containing mode relevance. Use case in point is Markdown that
          // allows XML everywhere and makes every XML snippet to have a much larger Markdown
          // score.

          if (top.relevance > 0) {
            relevance += result.relevance;
          }

          if (explicit) {
            continuations[top.subLanguage] = result.top;
          }

          return buildSpan(result.language, result.value, false, true);
        }

        function processBuffer() {
          result += top.subLanguage != null ? processSubLanguage() : processKeywords();
          mode_buffer = '';
        }

        function startNewMode(mode) {
          result += mode.className ? buildSpan(mode.className, '', true) : '';
          top = Object.create(mode, {
            parent: {
              value: top
            }
          });
        }

        function doBeginMatch(match) {
          var lexeme = match[0];
          var new_mode = match.rule;

          if (new_mode && new_mode.endSameAsBegin) {
            new_mode.endRe = escapeRe(lexeme);
          }

          if (new_mode.skip) {
            mode_buffer += lexeme;
          } else {
            if (new_mode.excludeBegin) {
              mode_buffer += lexeme;
            }

            processBuffer();

            if (!new_mode.returnBegin && !new_mode.excludeBegin) {
              mode_buffer = lexeme;
            }
          }

          startNewMode(new_mode);
          return new_mode.returnBegin ? 0 : lexeme.length;
        }

        function doEndMatch(match) {
          var lexeme = match[0];
          var matchPlusRemainder = codeToHighlight.substr(match.index);
          var end_mode = endOfMode(top, matchPlusRemainder);

          if (!end_mode) {
            return;
          }

          var origin = top;

          if (origin.skip) {
            mode_buffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              mode_buffer += lexeme;
            }

            processBuffer();

            if (origin.excludeEnd) {
              mode_buffer = lexeme;
            }
          }

          do {
            if (top.className) {
              result += spanEndTag;
            }

            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }

            top = top.parent;
          } while (top !== end_mode.parent);

          if (end_mode.starts) {
            if (end_mode.endSameAsBegin) {
              end_mode.starts.endRe = end_mode.endRe;
            }

            startNewMode(end_mode.starts);
          }

          return origin.returnEnd ? 0 : lexeme.length;
        }

        var lastMatch = {};

        function processLexeme(text_before_match, match) {
          var lexeme = match && match[0]; // add non-matched text to the current mode buffer

          mode_buffer += text_before_match;

          if (lexeme == null) {
            processBuffer();
            return 0;
          } // we've found a 0 width match and we're stuck, so we need to advance
          // this happens when we have badly behaved rules that have optional matchers to the degree that
          // sometimes they can end up matching nothing at all
          // Ref: https://github.com/highlightjs/highlight.js/issues/2140


          if (lastMatch.type == "begin" && match.type == "end" && lastMatch.index == match.index && lexeme === "") {
            // spit the "skipped" character that our regex choked on back into the output sequence
            mode_buffer += codeToHighlight.slice(match.index, match.index + 1);
            return 1;
          }

          lastMatch = match;

          if (match.type === "begin") {
            return doBeginMatch(match);
          } else if (match.type === "illegal" && !ignore_illegals) {
            // illegal match, we do not continue processing
            throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
          } else if (match.type === "end") {
            var processed = doEndMatch(match);
            if (processed != undefined) return processed;
          }
          /*
          Why might be find ourselves here?  Only one occasion now.  An end match that was
          triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
          rule sets the end rule to a specific match.  Since the overall mode termination rule that's
          being used to scan the text isn't recompiled that means that any match that LOOKS like
          the end (but is not, because it is not an exact match to the beginning) will
          end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
          the end rule and fails to match, we wind up here, and just silently ignore the end.
           This causes no real harm other than stopping a few times too many.
          */


          mode_buffer += lexeme;
          return lexeme.length;
        }

        var language = getLanguage(languageName);

        if (!language) {
          console.error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }

        compileLanguage(language);
        var top = continuation || language;
        var continuations = {}; // keep continuations for sub-languages

        var result = '',
            current;

        for (current = top; current !== language; current = current.parent) {
          if (current.className) {
            result = buildSpan(current.className, '', true) + result;
          }
        }

        var mode_buffer = '';
        var relevance = 0;

        try {
          var match,
              count,
              index = 0;

          while (true) {
            top.terminators.lastIndex = index;
            match = top.terminators.exec(codeToHighlight);
            if (!match) break;
            count = processLexeme(codeToHighlight.substring(index, match.index), match);
            index = match.index + count;
          }

          processLexeme(codeToHighlight.substr(index));

          for (current = top; current.parent; current = current.parent) {
            // close dangling modes
            if (current.className) {
              result += spanEndTag;
            }
          }

          return {
            relevance: relevance,
            value: result,
            illegal: false,
            language: languageName,
            top: top
          };
        } catch (err) {
          if (err.message && err.message.indexOf('Illegal') !== -1) {
            return {
              illegal: true,
              relevance: 0,
              value: escape(codeToHighlight)
            };
          } else if (SAFE_MODE) {
            return {
              relevance: 0,
              value: escape(codeToHighlight),
              language: languageName,
              top: top,
              errorRaised: err
            };
          } else {
            throw err;
          }
        }
      }
      /*
      Highlighting with language detection. Accepts a string with the code to
      highlight. Returns an object with the following properties:
       - language (detected language)
      - relevance (int)
      - value (an HTML string with highlighting markup)
      - second_best (object with the same structure for second-best heuristically
        detected language, may be absent)
       */


      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || objectKeys(languages);
        var result = {
          relevance: 0,
          value: escape(code)
        };
        var second_best = result;
        languageSubset.filter(getLanguage).filter(autoDetection).forEach(function (name) {
          var current = highlight(name, code, false);
          current.language = name;

          if (current.relevance > second_best.relevance) {
            second_best = current;
          }

          if (current.relevance > result.relevance) {
            second_best = result;
            result = current;
          }
        });

        if (second_best.language) {
          result.second_best = second_best;
        }

        return result;
      }
      /*
      Post-processing of the highlighted markup:
       - replace TABs with something more useful
      - replace real line-breaks with '<br>' for non-pre containers
       */


      function fixMarkup(value) {
        if (!(options.tabReplace || options.useBR)) {
          return value;
        }

        return value.replace(fixMarkupRe, function (match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }

          return '';
        });
      }

      function buildClassName(prevClassName, currentLang, resultLang) {
        var language = currentLang ? aliases[currentLang] : resultLang,
            result = [prevClassName.trim()];

        if (!prevClassName.match(/\bhljs\b/)) {
          result.push('hljs');
        }

        if (prevClassName.indexOf(language) === -1) {
          result.push(language);
        }

        return result.join(' ').trim();
      }
      /*
      Applies highlighting to a DOM node containing code. Accepts a DOM node and
      two optional parameters for fixMarkup.
      */


      function highlightBlock(block) {
        var node, originalStream, result, resultNode, text;
        var language = blockLanguage(block);
        if (isNotHighlighted(language)) return;

        if (options.useBR) {
          node = document.createElement('div');
          node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
        } else {
          node = block;
        }

        text = node.textContent;
        result = language ? highlight(language, text, true) : highlightAuto(text);
        originalStream = nodeStream(node);

        if (originalStream.length) {
          resultNode = document.createElement('div');
          resultNode.innerHTML = result.value;
          result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
        }

        result.value = fixMarkup(result.value);
        block.innerHTML = result.value;
        block.className = buildClassName(block.className, language, result.language);
        block.result = {
          language: result.language,
          re: result.relevance
        };

        if (result.second_best) {
          block.second_best = {
            language: result.second_best.language,
            re: result.second_best.relevance
          };
        }
      }
      /*
      Updates highlight.js global options with values passed in the form of an object.
      */


      function configure(user_options) {
        options = inherit(options, user_options);
      }
      /*
      Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
      */


      function initHighlighting() {
        if (initHighlighting.called) return;
        initHighlighting.called = true;
        var blocks = document.querySelectorAll('pre code');
        ArrayProto.forEach.call(blocks, highlightBlock);
      }
      /*
      Attaches highlighting to the page load event.
      */


      function initHighlightingOnLoad() {
        window.addEventListener('DOMContentLoaded', initHighlighting, false);
        window.addEventListener('load', initHighlighting, false);
      }

      var PLAINTEXT_LANGUAGE = {
        disableAutodetect: true
      };

      function registerLanguage(name, language) {
        var lang;

        try {
          lang = language(hljs);
        } catch (error) {
          console.error("Language definition for '{}' could not be registered.".replace("{}", name)); // hard or soft error

          if (!SAFE_MODE) {
            throw error;
          } else {
            console.error(error);
          } // languages that have serious errors are replaced with essentially a
          // "plaintext" stand-in so that the code blocks will still get normal
          // css classes applied to them - and one bad language won't break the
          // entire highlighter


          lang = PLAINTEXT_LANGUAGE;
        }

        languages[name] = lang;
        restoreLanguageApi(lang);
        lang.rawDefinition = language.bind(null, hljs);

        if (lang.aliases) {
          lang.aliases.forEach(function (alias) {
            aliases[alias] = name;
          });
        }
      }

      function listLanguages() {
        return objectKeys(languages);
      }
      /*
        intended usage: When one language truly requires another
         Unlike `getLanguage`, this will throw when the requested language
        is not available.
      */


      function requireLanguage(name) {
        var lang = getLanguage(name);

        if (lang) {
          return lang;
        }

        var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
        throw err;
      }

      function getLanguage(name) {
        name = (name || '').toLowerCase();
        return languages[name] || languages[aliases[name]];
      }

      function autoDetection(name) {
        var lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      /* Interface definition */


      hljs.highlight = highlight;
      hljs.highlightAuto = highlightAuto;
      hljs.fixMarkup = fixMarkup;
      hljs.highlightBlock = highlightBlock;
      hljs.configure = configure;
      hljs.initHighlighting = initHighlighting;
      hljs.initHighlightingOnLoad = initHighlightingOnLoad;
      hljs.registerLanguage = registerLanguage;
      hljs.listLanguages = listLanguages;
      hljs.getLanguage = getLanguage;
      hljs.requireLanguage = requireLanguage;
      hljs.autoDetection = autoDetection;
      hljs.inherit = inherit;

      hljs.debugMode = function () {
        SAFE_MODE = false;
      }; // Common regexps


      hljs.IDENT_RE = '[a-zA-Z]\\w*';
      hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
      hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
      hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float

      hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...

      hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'; // Common modes

      hljs.BACKSLASH_ESCAPE = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
      };
      hljs.APOS_STRING_MODE = {
        className: 'string',
        begin: '\'',
        end: '\'',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      hljs.QUOTE_STRING_MODE = {
        className: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      hljs.PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };

      hljs.COMMENT = function (begin, end, inherits) {
        var mode = hljs.inherit({
          className: 'comment',
          begin: begin,
          end: end,
          contains: []
        }, inherits || {});
        mode.contains.push(hljs.PHRASAL_WORDS_MODE);
        mode.contains.push({
          className: 'doctag',
          begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
          relevance: 0
        });
        return mode;
      };

      hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
      hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
      hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
      hljs.NUMBER_MODE = {
        className: 'number',
        begin: hljs.NUMBER_RE,
        relevance: 0
      };
      hljs.C_NUMBER_MODE = {
        className: 'number',
        begin: hljs.C_NUMBER_RE,
        relevance: 0
      };
      hljs.BINARY_NUMBER_MODE = {
        className: 'number',
        begin: hljs.BINARY_NUMBER_RE,
        relevance: 0
      };
      hljs.CSS_NUMBER_MODE = {
        className: 'number',
        begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
        relevance: 0
      };
      hljs.REGEXP_MODE = {
        className: 'regexp',
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [hljs.BACKSLASH_ESCAPE, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [hljs.BACKSLASH_ESCAPE]
        }]
      };
      hljs.TITLE_MODE = {
        className: 'title',
        begin: hljs.IDENT_RE,
        relevance: 0
      };
      hljs.UNDERSCORE_TITLE_MODE = {
        className: 'title',
        begin: hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      hljs.METHOD_GUARD = {
        // excludes method names from keyword processing
        begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var constants = [hljs.BACKSLASH_ESCAPE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.PHRASAL_WORDS_MODE, hljs.COMMENT, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.HASH_COMMENT_MODE, hljs.NUMBER_MODE, hljs.C_NUMBER_MODE, hljs.BINARY_NUMBER_MODE, hljs.CSS_NUMBER_MODE, hljs.REGEXP_MODE, hljs.TITLE_MODE, hljs.UNDERSCORE_TITLE_MODE, hljs.METHOD_GUARD];
      constants.forEach(function (obj) {
        deepFreeze(obj);
      }); // https://github.com/substack/deep-freeze/blob/master/index.js

      function deepFreeze(o) {
        Object.freeze(o);
        var objIsFunction = typeof o === 'function';
        Object.getOwnPropertyNames(o).forEach(function (prop) {
          if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") // IE11 fix: https://github.com/highlightjs/highlight.js/issues/2318
          // TODO: remove in the future
          && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
          }
        });
        return o;
      }

      ;
      return hljs;
    });
    /***/

  },

  /***/
  "./node_modules/highlight.js/lib/languages/scss.js":
  /*!*********************************************************!*\
    !*** ./node_modules/highlight.js/lib/languages/scss.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesScssJs(module, exports) {
    module.exports = function (hljs) {
      var AT_IDENTIFIER = '@[a-z-]+'; // @font-face

      var AT_MODIFIERS = "and or not only";
      var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
      var VARIABLE = {
        className: 'variable',
        begin: '(\\$' + IDENT_RE + ')\\b'
      };
      var HEXCOLOR = {
        className: 'number',
        begin: '#[0-9A-Fa-f]+'
      };
      var DEF_INTERNALS = {
        className: 'attribute',
        begin: '[A-Z\\_\\.\\-]+',
        end: ':',
        excludeEnd: true,
        illegal: '[^\\s]',
        starts: {
          endsWithParent: true,
          excludeEnd: true,
          contains: [HEXCOLOR, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
            className: 'meta',
            begin: '!important'
          }]
        }
      };
      return {
        case_insensitive: true,
        illegal: '[=/|\']',
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
          className: 'selector-id',
          begin: '\\#[A-Za-z0-9_-]+',
          relevance: 0
        }, {
          className: 'selector-class',
          begin: '\\.[A-Za-z0-9_-]+',
          relevance: 0
        }, {
          className: 'selector-attr',
          begin: '\\[',
          end: '\\]',
          illegal: '$'
        }, {
          className: 'selector-tag',
          // begin: IDENT_RE, end: '[,|\\s]'
          begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
          relevance: 0
        }, {
          className: 'selector-pseudo',
          begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
        }, {
          className: 'selector-pseudo',
          begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
        }, VARIABLE, {
          className: 'attribute',
          begin: '\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
          illegal: '[^\\s]'
        }, {
          begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
        }, {
          begin: ':',
          end: ';',
          contains: [VARIABLE, HEXCOLOR, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, {
            className: 'meta',
            begin: '!important'
          }]
        }, // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: '@(page|font-face)',
          lexemes: AT_IDENTIFIER,
          keywords: '@page @font-face'
        }, {
          begin: '@',
          end: '[{;]',
          returnBegin: true,
          keywords: AT_MODIFIERS,
          contains: [{
            begin: AT_IDENTIFIER,
            className: "keyword"
          }, VARIABLE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, HEXCOLOR, hljs.CSS_NUMBER_MODE // {
          //   begin: '\\s[A-Za-z0-9_.-]+',
          //   relevance: 0
          // }
          ]
        }]
      };
    };
    /***/

  },

  /***/
  "./node_modules/highlight.js/lib/languages/typescript.js":
  /*!***************************************************************!*\
    !*** ./node_modules/highlight.js/lib/languages/typescript.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesTypescriptJs(module, exports) {
    module.exports = function (hljs) {
      var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
      var KEYWORDS = {
        keyword: 'in if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const class public private protected get set super ' + 'static implements enum export import declare type namespace abstract ' + 'as from extends async await',
        literal: 'true false null undefined NaN Infinity',
        built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document any number boolean string void Promise'
      };
      var DECORATOR = {
        className: 'meta',
        begin: '@' + JS_IDENT_RE
      };
      var ARGS = {
        begin: '\\(',
        end: /\)/,
        keywords: KEYWORDS,
        contains: ['self', hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.NUMBER_MODE]
      };
      var PARAMS = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, DECORATOR, ARGS]
      };
      var NUMBER = {
        className: 'number',
        variants: [{
          begin: '\\b(0[bB][01]+)n?'
        }, {
          begin: '\\b(0[oO][0-7]+)n?'
        }, {
          begin: hljs.C_NUMBER_RE + 'n?'
        }],
        relevance: 0
      };
      var SUBST = {
        className: 'subst',
        begin: '\\$\\{',
        end: '\\}',
        keywords: KEYWORDS,
        contains: [] // defined later

      };
      var HTML_TEMPLATE = {
        begin: 'html`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'xml'
        }
      };
      var CSS_TEMPLATE = {
        begin: 'css`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'css'
        }
      };
      var TEMPLATE_STRING = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      };
      SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
      return {
        aliases: ['ts'],
        keywords: KEYWORDS,
        contains: [{
          className: 'meta',
          begin: /^\s*['"]use strict['"]/
        }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, {
          // "value" container
          begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
            className: 'function',
            begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [{
              className: 'params',
              variants: [{
                begin: hljs.IDENT_RE
              }, {
                begin: /\(\s*\)/
              }, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: ['self', hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
              }]
            }]
          }],
          relevance: 0
        }, {
          className: 'function',
          beginKeywords: 'function',
          end: /[\{;]/,
          excludeEnd: true,
          keywords: KEYWORDS,
          contains: ['self', hljs.inherit(hljs.TITLE_MODE, {
            begin: JS_IDENT_RE
          }), PARAMS],
          illegal: /%/,
          relevance: 0 // () => {} is more typical in TypeScript

        }, {
          beginKeywords: 'constructor',
          end: /[\{;]/,
          excludeEnd: true,
          contains: ['self', PARAMS]
        }, {
          // prevent references like module.id from being higlighted as module definitions
          begin: /module\./,
          keywords: {
            built_in: 'module'
          },
          relevance: 0
        }, {
          beginKeywords: 'module',
          end: /\{/,
          excludeEnd: true
        }, {
          beginKeywords: 'interface',
          end: /\{/,
          excludeEnd: true,
          keywords: 'interface extends'
        }, {
          begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`

        }, {
          begin: '\\.' + hljs.IDENT_RE,
          relevance: 0 // hack: prevents detection of keywords after dots

        }, DECORATOR, ARGS]
      };
    };
    /***/

  },

  /***/
  "./node_modules/highlight.js/lib/languages/xml.js":
  /*!********************************************************!*\
    !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesXmlJs(module, exports) {
    module.exports = function (hljs) {
      var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
      var XML_ENTITIES = {
        className: 'symbol',
        begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
      };
      var XML_META_KEYWORDS = {
        begin: '\\s',
        contains: [{
          className: 'meta-keyword',
          begin: '#?[a-z_][a-z1-9_-]+',
          illegal: '\\n'
        }]
      };
      var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
        begin: '\\(',
        end: '\\)'
      });
      var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
        className: 'meta-string'
      });
      var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        className: 'meta-string'
      });
      var TAG_INTERNALS = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: 'attr',
          begin: XML_IDENT_RE,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: 'string',
            endsParent: true,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [XML_ENTITIES]
            }, {
              begin: /'/,
              end: /'/,
              contains: [XML_ENTITIES]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
      return {
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
        case_insensitive: true,
        contains: [{
          className: 'meta',
          begin: '<![a-z]',
          end: '>',
          relevance: 10,
          contains: [XML_META_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE, XML_META_PAR_KEYWORDS, {
            begin: '\\[',
            end: '\\]',
            contains: [{
              className: 'meta',
              begin: '<![a-z]',
              end: '>',
              contains: [XML_META_KEYWORDS, XML_META_PAR_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE]
            }]
          }]
        }, hljs.COMMENT('<!--', '-->', {
          relevance: 10
        }), {
          begin: '<\\!\\[CDATA\\[',
          end: '\\]\\]>',
          relevance: 10
        }, XML_ENTITIES, {
          className: 'meta',
          begin: /<\?xml/,
          end: /\?>/,
          relevance: 10
        }, {
          begin: /<\?(php)?/,
          end: /\?>/,
          subLanguage: 'php',
          contains: [// We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: '/\\*',
            end: '\\*/',
            skip: true
          }, {
            begin: 'b"',
            end: '"',
            skip: true
          }, {
            begin: 'b\'',
            end: '\'',
            skip: true
          }, hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: true
          }), hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: true
          })]
        }, {
          className: 'tag',

          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending braket. The '$' is needed for the lexeme to be recognized
          by hljs.subMode() that tests lexemes outside the stream.
          */
          begin: '<style(?=\\s|>)',
          end: '>',
          keywords: {
            name: 'style'
          },
          contains: [TAG_INTERNALS],
          starts: {
            end: '</style>',
            returnEnd: true,
            subLanguage: ['css', 'xml']
          }
        }, {
          className: 'tag',
          // See the comment in the <style tag about the lookahead pattern
          begin: '<script(?=\\s|>)',
          end: '>',
          keywords: {
            name: 'script'
          },
          contains: [TAG_INTERNALS],
          starts: {
            end: '\<\/script\>',
            returnEnd: true,
            subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
          }
        }, {
          className: 'tag',
          begin: '</?',
          end: '/?>',
          contains: [{
            className: 'name',
            begin: /[^\/><\s]+/,
            relevance: 0
          }, TAG_INTERNALS]
        }]
      };
    };
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsSecondaryToolbarSecondaryToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"secondary-toolbar-placeholder\">&nbsp;</div>\n\n<div [ngClass]=\"{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }\"\n     class=\"secondary-toolbar shadow-b py-1 z-40 border-t\"\n     fxLayout=\"row\">\n  <div class=\"px-gutter\" fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n    <h1 *ngIf=\"current\"\n        class=\"subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3\"\n        fxFlex.xs=\"auto\">{{ current }}</h1>\n\n    <ng-content></ng-content>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-right.animation.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
    \********************************************************/

  /*! exports provided: fadeInRightAnimation, fadeInRight400ms */

  /***/
  function srcVexAnimationsFadeInRightAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function () {
      return fadeInRightAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function () {
      return fadeInRight400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function fadeInRightAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateX(-20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      }))])]);
    }

    var fadeInRight400ms = fadeInRightAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-up.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

  /***/
  function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
      return fadeInUpAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
      return fadeInUp400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function fadeInUpAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
    }

    var fadeInUp400ms = fadeInUpAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/stagger.animation.ts":
  /*!**************************************************!*\
    !*** ./src/@vex/animations/stagger.animation.ts ***!
    \**************************************************/

  /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */

  /***/
  function srcVexAnimationsStaggerAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () {
      return staggerAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger80ms", function () {
      return stagger80ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger60ms", function () {
      return stagger60ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger40ms", function () {
      return stagger40ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger20ms", function () {
      return stagger20ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function staggerAnimation(timing) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), {
        optional: true
      })])]);
    }

    var stagger80ms = staggerAnimation(80);
    var stagger60ms = staggerAnimation(60);
    var stagger40ms = staggerAnimation(40);
    var stagger20ms = staggerAnimation(20);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumb',
      template: "\n      <ng-content></ng-content>\n  ",
      host: {
        "class": 'vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
      }
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
    \******************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-home */
    "./node_modules/@iconify/icons-ic/twotone-home.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/track-by */
    "./src/@vex/utils/track-by.ts");

    var BreadcrumbsComponent = /*#__PURE__*/function () {
      function BreadcrumbsComponent() {
        _classCallCheck(this, BreadcrumbsComponent);

        this.crumbs = [];
        this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByValue"];
        this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbsComponent.prototype, "crumbs", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumbs',
      template: "\n      <div class=\"flex items-center\">\n          <vex-breadcrumb>\n              <a [routerLink]=\"['/']\">\n                  <ic-icon [icon]=\"icHome\" inline=\"true\" size=\"20px\"></ic-icon>\n              </a>\n          </vex-breadcrumb>\n          <ng-container *ngFor=\"let crumb of crumbs; trackBy: trackByValue\">\n              <div class=\"w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2\"></div>\n              <vex-breadcrumb>\n                  <a [routerLink]=\"[]\">{{ crumb }}</a>\n              </vex-breadcrumb>\n          </ng-container>\n      </div>\n  "
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
    \***************************************************************/

  /*! exports provided: BreadcrumbsModule */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function () {
      return BreadcrumbsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts");

    var BreadcrumbsModule = function BreadcrumbsModule() {
      _classCallCheck(this, BreadcrumbsModule);
    };

    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
      declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]],
      exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
    })], BreadcrumbsModule);
    /***/
  },

  /***/
  "./src/@vex/components/highlight/highlight.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/@vex/components/highlight/highlight.directive.ts ***!
    \**************************************************************/

  /*! exports provided: HighlightDirective */

  /***/
  function srcVexComponentsHighlightHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
      return HighlightDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./highlight.service */
    "./src/@vex/components/highlight/highlight.service.ts");

    var HighlightDirective = /*#__PURE__*/function () {
      function HighlightDirective(_highlightService, _zone) {
        _classCallCheck(this, HighlightDirective);

        this._highlightService = _highlightService;
        this._zone = _zone;
        /** Stream that emits when code string is highlighted */

        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(HighlightDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.code && changes.code.currentValue !== changes.code.previousValue) {
            this.highlightElement(this.code, this.languages);
          }
        }
        /**
         * Highlighting with language detection and fix markup.
         * @param code Accepts a string with the code to highlight
         * @param languages An optional array of language names and aliases restricting detection to only those languages.
         * The subset can also be set with configure, but the local parameter overrides the option if set.
         */

      }, {
        key: "highlightElement",
        value: function highlightElement(code, languages) {
          var _this = this;

          this._zone.runOutsideAngular(function () {
            var res = _this._highlightService.highlightAuto(code, languages);

            _this.highlightedCode = res.value;

            _this.highlighted.emit(res);
          });
        }
      }]);

      return HighlightDirective;
    }();

    HighlightDirective.ctorParameters = function () {
      return [{
        type: _highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HighlightDirective.prototype, "languages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vexHighlight')], HighlightDirective.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HighlightDirective.prototype, "highlighted", void 0);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexHighlight]',
      host: {
        '[class.hljs]': 'true',
        '[innerHTML]': 'highlightedCode'
      }
    })], HighlightDirective);
    /***/
  },

  /***/
  "./src/@vex/components/highlight/highlight.model.ts":
  /*!**********************************************************!*\
    !*** ./src/@vex/components/highlight/highlight.model.ts ***!
    \**********************************************************/

  /*! exports provided: HIGHLIGHT_OPTIONS */

  /***/
  function srcVexComponentsHighlightHighlightModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_OPTIONS", function () {
      return HIGHLIGHT_OPTIONS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HIGHLIGHT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HIGHLIGHT_OPTIONS');
    /***/
  },

  /***/
  "./src/@vex/components/highlight/highlight.module.ts":
  /*!***********************************************************!*\
    !*** ./src/@vex/components/highlight/highlight.module.ts ***!
    \***********************************************************/

  /*! exports provided: hljsLanguages, HighlightModule */

  /***/
  function srcVexComponentsHighlightHighlightModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hljsLanguages", function () {
      return hljsLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightModule", function () {
      return HighlightModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _highlight_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./highlight.directive */
    "./src/@vex/components/highlight/highlight.directive.ts");
    /* harmony import */


    var _highlight_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./highlight.model */
    "./src/@vex/components/highlight/highlight.model.ts");
    /* harmony import */


    var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highlight.js/lib/languages/xml */
    "./node_modules/highlight.js/lib/languages/xml.js");
    /* harmony import */


    var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highlight.js/lib/languages/scss */
    "./node_modules/highlight.js/lib/languages/scss.js");
    /* harmony import */


    var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! highlight.js/lib/languages/typescript */
    "./node_modules/highlight.js/lib/languages/typescript.js");
    /* harmony import */


    var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _highlight_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./highlight.service */
    "./src/@vex/components/highlight/highlight.service.ts");
    /**
     * Import every language you wish to highlight here
     * NOTE: The name of each language must match the file name its imported from
     */

    /**
     * Import every language you wish to highlight here
     * NOTE: The name of each language must match the file name its imported from
     */


    function hljsLanguages() {
      return [{
        name: 'typescript',
        func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6___default.a
      }, {
        name: 'scss',
        func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_5___default.a
      }, {
        name: 'xml',
        func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4___default.a
      }];
    }

    var HighlightModule = function HighlightModule() {
      _classCallCheck(this, HighlightModule);
    };

    HighlightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [{
        provide: _highlight_model__WEBPACK_IMPORTED_MODULE_3__["HIGHLIGHT_OPTIONS"],
        useValue: {
          languages: hljsLanguages
        }
      }, _highlight_service__WEBPACK_IMPORTED_MODULE_7__["HighlightService"]],
      declarations: [_highlight_directive__WEBPACK_IMPORTED_MODULE_2__["HighlightDirective"]],
      imports: [],
      exports: [_highlight_directive__WEBPACK_IMPORTED_MODULE_2__["HighlightDirective"]]
    })], HighlightModule);
    /***/
  },

  /***/
  "./src/@vex/components/highlight/highlight.service.ts":
  /*!************************************************************!*\
    !*** ./src/@vex/components/highlight/highlight.service.ts ***!
    \************************************************************/

  /*! exports provided: HighlightService */

  /***/
  function srcVexComponentsHighlightHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
      return HighlightService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _highlight_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./highlight.model */
    "./src/@vex/components/highlight/highlight.model.ts");
    /* harmony import */


    var highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highlight.js/lib/highlight.js */
    "./node_modules/highlight.js/lib/highlight.js");
    /* harmony import */


    var highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3__);

    var HighlightService = /*#__PURE__*/function () {
      function HighlightService(options) {
        var _this2 = this;

        _classCallCheck(this, HighlightService);

        if (options) {
          // Register HighlightJS languages
          options.languages().map(function (language) {
            return _this2.registerLanguage(language.name, language.func);
          });

          if (options.config) {
            // Set global config if present
            this.configure(options.config);
          }
        } // Throw an error if no languages were registered.


        if (this.listLanguages().length < 1) {
          throw new Error('[HighlightJS]: No languages were registered!');
        }
      }
      /**
       * Core highlighting function.
       * @param name Accepts a language name, or an alias
       * @param value A string with the code to highlight.
       * @param ignore_illegals When present and evaluates to a true value, forces highlighting to finish
       * even in case of detecting illegal syntax for the language instead of throwing an exception.
       * @param continuation An optional mode stack representing unfinished parsing.
       * When present, the function will restart parsing from this state instead of initializing a new one
       */


      _createClass(HighlightService, [{
        key: "highlight",
        value: function highlight(name, value, ignore_illegals, continuation) {
          return highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.highlight(name, value, ignore_illegals, continuation);
        }
        /**
         * Highlighting with language detection.
         * @param value Accepts a string with the code to highlight
         * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
         * The subset can also be set with configure, but the local parameter overrides the option if set.
         */

      }, {
        key: "highlightAuto",
        value: function highlightAuto(value, languageSubset) {
          return highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAuto(value, languageSubset);
        }
        /**
         * Post-processing of the highlighted markup.
         * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
         * Options are set globally with configure.
         * @param value Accepts a string with the highlighted markup
         */

      }, {
        key: "fixMarkup",
        value: function fixMarkup(value) {
          return highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.fixMarkup(value);
        }
        /**
         * Applies highlighting to a DOM node containing code.
         * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
         * See the class reference for all available language names and aliases.
         * @param block The element to apply highlight on.
         */

      }, {
        key: "highlightBlock",
        value: function highlightBlock(block) {
          highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.highlightBlock(block);
        }
        /**
         * Configures global options:
         * @param config
         */

      }, {
        key: "configure",
        value: function configure(config) {
          highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.configure(config);
        }
        /**
         * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
         */

      }, {
        key: "initHighlighting",
        value: function initHighlighting() {
          highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.initHighlighting();
        }
        /**
         * Adds new language to the library under the specified name. Used mostly internally.
         * @param name A string with the name of the language being registered
         * @param language A function that returns an object which represents the language definition.
         * The function is passed the hljs object to be able to use common regular expressions defined within it.
         */

      }, {
        key: "registerLanguage",
        value: function registerLanguage(name, language) {
          highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.registerLanguage(name, language);
        }
        /**
         * @return The languages names list.
         */

      }, {
        key: "listLanguages",
        value: function listLanguages() {
          return highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.listLanguages();
        }
        /**
         * Looks up a language by name or alias.
         * @param name Language name
         * @return The language object if found, undefined otherwise.
         */

      }, {
        key: "getLanguage",
        value: function getLanguage(name) {
          return highlight_js_lib_highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.getLanguage(name);
        }
      }]);

      return HighlightService;
    }();

    HighlightService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_highlight_model__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_OPTIONS"]]
        }]
      }];
    };

    HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_highlight_model__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_OPTIONS"]))], HighlightService);
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".secondary-toolbar {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder {\n  height: var(--secondary-toolbar-height);\n}\n\n::ng-deep .is-mobile .fixed {\n  width: 100%;\n}\n\n::ng-deep body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n::ng-deep vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n  ::ng-deep vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvVGF4aS1mcm9udC9zcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy9zZWNvbmRhcnktdG9vbGJhci9zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzREFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZGFyeS10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpICogLTEpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIuZml4ZWQge1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5pcy1tb2JpbGUgLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci5maXhlZCB7XG4gIHdpZHRoOiB2YXIoLS10b29sYmFyLXdpZHRoKTtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyLXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xufVxuXG46Om5nLWRlZXAgLmlzLW1vYmlsZSAuZml4ZWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIGJvZHkgLmZpeGVkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtd2lkdGgpKTtcbn1cblxuOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICA6Om5nLWRlZXAgdmV4LWJyZWFkY3J1bWJzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SecondaryToolbarComponent */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryToolbarComponent", function () {
      return SecondaryToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SecondaryToolbarComponent = /*#__PURE__*/function () {
      function SecondaryToolbarComponent(configService) {
        _classCallCheck(this, SecondaryToolbarComponent);

        this.configService = configService;
        this.fixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
          return config.toolbar.fixed;
        }));
      }

      _createClass(SecondaryToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondaryToolbarComponent;
    }();

    SecondaryToolbarComponent.ctorParameters = function () {
      return [{
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryToolbarComponent.prototype, "current", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryToolbarComponent.prototype, "crumbs", void 0);
    SecondaryToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-secondary-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./secondary-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./secondary-toolbar.component.scss */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss"))["default"]]
    })], SecondaryToolbarComponent);
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SecondaryToolbarModule */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryToolbarModule", function () {
      return SecondaryToolbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var SecondaryToolbarModule = function SecondaryToolbarModule() {
      _classCallCheck(this, SecondaryToolbarModule);
    };

    SecondaryToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]],
      exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]]
    })], SecondaryToolbarModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e-es5.js.map