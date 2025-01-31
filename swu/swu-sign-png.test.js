
const { signPng } = require('./swu-sign-png');

it('should pass', () => {
  expect(true).toBe(true);
})

it('should have return a sign image', done => {
  signPng('𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񆈥𝤐𝤆񀀚𝣮𝣭',
    (err, res) => {
      expect(err).toBeFalsy();
      expect(res.toString('base64')).toBe('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')
      done();
    }
  )
})

it('should return a blank png for invalid key', done => {
  signPng('񆈶',
    (err, res) => {
      expect(err).toBeFalsy();
      expect(res.toString('base64')).toBe('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAAC0lEQVQImWNgAAIAAAUAAWJVMogAAAAASUVORK5CYII=')
      done();
    }
  )
})
