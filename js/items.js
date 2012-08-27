items = {
    'Generic text' : function(){
        function Item() {
            this.text = '';
        }

        Item.prototype.display = function() {
            var d = $('<div>');
            this.field = $('<input>');
            d.append( this.field );
            return d;
        }

        Item.prototype.code = function(){
            var text = this.field.val();
            return "$('<p>', { html :'" + text +"'} ).appendTo('body');";
        }

        return new Item();
    } ,
    'Generic img' : function(){
        function Item() {
        }

        Item.prototype.display = function() {
            var d = $('<div>');
            this.field = $('<input>');
            this.float = $('<input>', { value: 'right' } );
            d.append( this.field );
            d.append( this.float );
            return d;
        }

        Item.prototype.code = function(){
            var url = this.field.val();
            var float = this.float.val();
            return "$('<img>', { src :'" + url +"', class : 'img-rounded', style: 'float:" + float + ";' } ).appendTo('body');";
        }

        return new Item();
    } ,
    'Generic link' : function(){
        function Item() {
        }

        Item.prototype.display = function() {
            var d = $('<div>');
            this.field = $('<input>');
            this.name = $('<input>');
            this.style = $('<input>', { value: 'btn btn-info' } );
            d.append( this.field );
            d.append( this.name );
            d.append( this.style );
            return d;
        }

        Item.prototype.code = function(){
            var url = this.field.val();
            var name = this.name.val();
            var style = this.style.val();
            return "$('<a>', { href :'" + url +"', class : '" + style + "', html : '" + name + "' } ).appendTo('body');";
        }

        return new Item();
    } ,
    'Poll' : function(){
        function Item() {
            this.question = '';
            this.answers = [];
        }

        Item.prototype._answer = function(base) {
            var ans = $('<input>');
            this.answers.push( ans );
            var self = this;
            ans.on('focus', function(){
                if( $(this).val() == '' ) {
                    self._answer( base );
                }
            });
            base.append( $('<li>').append( ans ) );
        }

        Item.prototype.display = function() {
            var d = $('<div>');
            var l = $('<ul>');
            this.question = $('<input>');
            d.append( this.question );
            d.append( l );
            this._answer( l );
            return d;
        }

        Item.prototype.code = function(){
            var text = this.question.val();
            var html = '';
            for( var i in this.answers ) {
                var a = this.answers[i];
                if( a.val() != '' ) {
                    html += "<button class='btn'>" + a.val() + "</button>";
                }
            }
            var q = "$('<div>', { class : 'btn-group', html : \"" + html + "\" } ).click( function(){ $(this).html('Thanks'); } ).appendTo('body');";
            return "$('<p>').html('" + text +"').appendTo('body');" + q;
        }

        return new Item();
    } ,
   'Checkbox' : function(){
        function Item() {
            this.question = '';
            this.answers = [];
        }

        Item.prototype._answer = function(base) {
            var ans = $('<input>');
            this.answers.push( ans );
            var self = this;
            ans.on('focus', function(){
                if( $(this).val() == '' ) {
                    self._answer( base );
                }
            });
            base.append( $('<li>').append( ans ) );
        }
     
     Item.prototype.display = function() {
            var d = $('<div>');
            var l = $('<ul>');
            this.question = $('<input>');
            d.append( this.question );
            d.append( l );
            this._answer( l );
            return d;
        }

        Item.prototype.code = function(){
            var text = this.question.val();
            var html = '';
            for( var i in this.answers ) {
                var a = this.answers[i];
                if( a.val() != '' ) {
                    html += "<label class='checkbox'><input type='checkbox'>  " + a.val() + "</label>";
                }
            }
            var q = "$('<div>', { class : 'btn-group', html : \"" + html + "\" } ).appendTo('body');";
            return "$('<p>').html('" + text +"').appendTo('body');" + q;
        }

        return new Item();
    },
    'Text input' : function() {
        function Item() {

        }

        Item.prototype.display = function() {
            var d = $('<div>', {html: 'Write response'} );
            return d;
        }

        Item.prototype.code = function() {
            return "$('<textarea>', { rows : '5' } ).appendTo('body')"
        }

        return new Item();
    },
    'Take a photo' : function() {
        function Item() {

        }

        Item.prototype.display = function() {
            return $('<div>', {html: 'Take a photo'} );
        }

        Item.prototype.code = function() {
            return "$('<button>', {html: 'Take a photo', class: 'btn btn-primary btn-block'} ).click( function(){ navigator.camera.getPicture( function() { $(this).remove(); $(body).append('<p>Thanks</p>'); }, $.noop, { quality : 75, destinationType : Camera.DestinationType.DATA_URL, sourceType : Camera.PictureSourceType.CAMERA } ); } ).appendTo('body');";
        }

        return new Item();
    } ,
    'Button' : function(){
        function Item() {
        }

        Item.prototype.display = function() {
            var d = $('<div>', {html : 'Button' } );
            this.field = $('<input>');
            this.style = $('<input>', { value: 'btn btn-primary' } );
            d.append( this.field );
            d.append( this.style );
            return d;
        }

        Item.prototype.code = function(){
            var text = this.field.val();
            var style = this.style.val();
            return "$('<button>', {  html :'" + text + "', type: 'button', class : '" + style + "' } ).appendTo('body');";
        }

        return new Item();
    } 
}
