import assert from 'assert/index'
import type from '..'

it('should match objects', () => {
  function Foo(){}
  assert('object' === type({}))
  assert('object' === type(new Foo))
})

it('should match numbers', () => {
  assert('number' === type(12))
  assert('number' === type(new Number(12)))
})

it('should match strings', () => {
  assert('string' === type("test"))
  assert('string' === type(new String('whoop')))
})

it('should match dates', () => {
  assert('date' === type(new Date))
})

it('should match booleans', () => {
  assert('boolean' === type(true))
  assert('boolean' === type(false))
  assert('boolean' === type(new Boolean(false)))
})

it('should match null', () => {
  assert('null' === type(null))
})

it('should match undefined', () => {
  assert('undefined' === type(undefined))
})

it('should match arrays', () => {
  assert('array' === type([]))
})

it('should match regexps', () => {
  assert('regexp' === type(/asdf/))
  assert('regexp' === type(new RegExp('weee')))
})

it('should match functions', () => {
  assert('function' === type(() => {}))
})

it('should match arguments', () => {
  assert('arguments' === type((() => { return arguments })()))
})

it('should match typed arrays', function () {
  assert('bit-array' === type(new Uint8Array))
  assert('bit-array' === type(new Uint16Array))
  assert('bit-array' === type(new Uint32Array))
})

it('should match errors', () => {
  assert('error' === type(new Error))
  assert('error' === type(new TypeError))
  assert('error' === type(new RangeError))
  assert('error' === type(new SyntaxError))
})

it('should match Maps', () => {
  assert('map' === type(new Map))
})

it('should match Sets', () => {
  assert('set' === type(new Set))
})

if (typeof window != 'undefined') describe('in browsers', () => {
  it('should match elements', () => {
    assert('element' === type(document.createElement('div')))
  })

  it('should match textnodes', () => {
    assert('text-node' === type(document.createTextNode('div')))
  })

  if (typeof FormData == 'function') it('should match from data', () => {
    assert('form-data' === type(new FormData))
  })

  if (typeof File == 'function') it('should match files', () => {
    assert('file' === type(new File)) // TODO: fix test
  })

  if (typeof Blob == 'function') it('should match blobs', () => {
    assert('blob' === type(new Blob))
  })
})
