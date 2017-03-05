import reducer, {
  initialState,
} from './details';

describe('reducer', () => {

  describe('entities.details', () => {

    describe('initialState', () => {
      it('should be an object', () => {
        expect(initialState).to.be.an('object');
      });
      it('should have property loading set to false', () => {
        expect(initialState).to.have.property('loading').that.is.false;
      });
    });

    it('should return the initialState', () => {

      expect(reducer(undefined, {}))
        .to.equal(initialState);

    });

  });

});
