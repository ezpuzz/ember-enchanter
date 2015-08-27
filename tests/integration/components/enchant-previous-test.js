import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enchant-previous', 'Integration | Component | enchant previous', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enchant-previous}}`);

  assert.equal(this.$().text().trim(), 'Previous');

  // Template block usage:
  this.render(hbs`
    {{#enchant-previous}}
      template block text
    {{/enchant-previous}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
