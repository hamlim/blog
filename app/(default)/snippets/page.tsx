import { Heading } from '@recipes/heading'
import { Box } from '@recipes/box'
import { List, ListItem } from '@recipes/list'
import { Text } from '@recipes/text'
import { Code } from '@recipes/code'
import { CodeBlock } from '@recipes/code-block'

export default function Snippets() {
  return (
    <Box>
      <Heading className="mb-4" is="h2">
        Snippets:
      </Heading>
      <List is="ul">
        <ListItem>
          <Heading is="h3">Timezone</Heading>
          <Text>
            A quick and easy one liner to access the current timezone!
          </Text>
          <CodeBlock
            className="lang-typescript"
            children={`new Intl.DateTimeFormat().resolvedOptions().timeZone`}
          />
        </ListItem>
        <ListItem>
          <Heading is="h3">Prettify</Heading>

          <CodeBlock
            className="lang-typescript"
            children={`// Reference: https://www.totaltypescript.com/concepts/the-prettify-helper

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};`}
          />
        </ListItem>
        <ListItem>
          <Heading is="h3">yw</Heading>

          <CodeBlock
            className="lang-shell"
            children={`# Bash script to execute a package.json script within a workspace
yw() {
  yarn workspace $(yarn workspaces list --json | jq -r .name | fzf) "$@"
}

# For yarn v1 monorepos, I use ywold:
ywold() {
  yarn workspace $(yarn --json workspaces info | jq '.data' -r | jq "[keys][0] []" -r | fzf) $@
}
`}
          />
        </ListItem>
        <ListItem>
          <Heading is="h3">Turbo workspace timings</Heading>

          <Text>
            If you work within a monorepo and want to get a breakdown of the
            time that each workspace takes to run a task (<Code>lib:build</Code>{' '}
            in the below example), then these three shell commands will do that!
          </Text>

          <CodeBlock
            className="lang-shell"
            children={`yarn turbo run lib:build --summarize
SUMMARY_FILE=$(/bin/ls .turbo/runs/*.json | head -n1)
cat $SUMMARY_FILE | jq '[.tasks[] | {"taskId": .taskId, "duration": (.execution.endTime - .execution.startTime)}] | sort_by(-.duration)'`}
          />
        </ListItem>
        <ListItem>
          <Heading is="h3">Alea</Heading>

          <CodeBlock
            className="lang-typescript"
            children={`// Reference: https://www.npmjs.com/package/alea
// From http://baagoe.com/en/RandomMusings/javascript/

// importState to sync generator states
Alea.importState = function(i){
  var random = new Alea();
  random.importState(i);
  return random;
};

function Alea() {
  return function(...args) {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    if (args.length == 0) {
      args = [+new Date];
    }
    var mash = Mash();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < args.length; i++) {
      s0 -= mash(args[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(args[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(args[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;

    var random = function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
    random.next = random;
    random.uint32 = function() {
      return random() * 0x100000000; // 2^32
    };
    random.fract53 = function() {
      return random() + 
        (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };
    random.version = 'Alea 0.9';
    random.args = args;

    // my own additions to sync state between two generators
    random.exportState = function(){
      return [s0, s1, s2, c];
    };
    random.importState = function(i){
      s0 = +i[0] || 0;
      s1 = +i[1] || 0;
      s2 = +i[2] || 0;
      c = +i[3] || 0;
    };

    return random;

  };
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  mash.version = 'Mash 0.9';
  return mash;
}

export default Alea;`}
          />
        </ListItem>
      </List>
    </Box>
  )
}
