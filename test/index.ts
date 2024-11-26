import { test } from '@substrate-system/tapzero'
import { kebabCase } from '../src/index.js'

test('kebab case', async t => {
    const expectedOutput = 'the-quick-brown-fox'

    t.equal(kebabCase('the quick brown fox'), expectedOutput,
        'brown fox example')
    t.equal(kebabCase('the-quick-brown-fox'), expectedOutput,
        'from kebab case returns the same string')
    t.equal(kebabCase('the_quick_brown_fox'), expectedOutput,
        'from snake case to kebab case')
    t.equal(kebabCase('theQuickBrownFox'), expectedOutput,
        'from camel case to kebab case')
    t.equal(kebabCase('theQuickBrown Fox'), expectedOutput,
        'camel case with spaces')
    t.equal(kebabCase('thequickbrownfox'), 'thequickbrownfox',
        'all lowercase input returns the same output')
    t.equal(kebabCase('the - quick * brown# fox'), expectedOutput,
        'punctuation and spaces')
    t.equal(kebabCase('theQUICKBrownFox'), expectedOutput,
        'wonky screaming + camel case')
})
