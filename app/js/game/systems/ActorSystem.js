/**
 * @author Joe Adams
 */

goog.provide('CloseContact.Systems.ActorSystem');

goog.require('CrunchJS.System');
goog.require('CrunchJS.Components.RenderShape')

/**
 * @constructor
 * @class
 */
CloseContact.Systems.ActorSystem = function() {
	goog.base(this);
};

goog.inherits(CloseContact.Systems.ActorSystem, CrunchJS.System);

CloseContact.Systems.ActorSystem.prototype.name = 'ActorSystem';

CloseContact.Systems.ActorSystem.prototype.activate = function() {
	this.setEntityComposition(this.getScene().createEntityComposition().all('Transform', 'Actor'));
};


CloseContact.Systems.ActorSystem.prototype.processEntity = function(frame, entityId) {
	var actor = this.getScene().getComponent(entityId, 'Actor'),
		trans = this.getScene().getComponent(entityId, 'Transform'),
		renderShape = this.getScene().getComponent(entityId, 'RenderShape');

	if(!renderShape){
		

		renderShape = new CrunchJS.Components.RenderShape({
	        type: 'rectangle',
	        color: actor.team == 0 ? '0xFF0000' : '0x0000FF',
	        size: {
	          x: 10,
	          y: 1.5
	        },
	        fill : true,
	        offset: {
	          x: 0,
	          y: -6
	        }
		});

		this.getScene().addComponent(entityId, renderShape);
	}

	renderShape.setSize(10*actor.getHealth()/actor.getMaxHealth(), renderShape.getSize().y);
};