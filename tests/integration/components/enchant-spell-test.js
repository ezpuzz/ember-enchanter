import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enchant-spell', 'Integration | Component | enchant spell', {
  integration: true,
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enchant-spell}}`);

  assert.equal(this.$().find('h1').text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enchant-spell}}
      template block text
    {{/enchant-spell}}
  `);

  assert.equal(this.$().find('#spell-pages').text().trim(), 'template block text');
});
