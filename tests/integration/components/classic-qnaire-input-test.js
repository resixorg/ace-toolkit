import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('classic-qnaire-input', 'Integration | Component | classic qnaire input', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{classic-qnaire-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#classic-qnaire-input}}
      template block text
    {{/classic-qnaire-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
