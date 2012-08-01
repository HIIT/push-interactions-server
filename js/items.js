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
            var q = "$('<div>')";
            for( var i in this.answers ) {
                var a = this.answers[i];
                if( a.val() != '' ) {
                    q += ".append($('<input>', { id : " + i + ", type: 'radio', name : 'radio-1' } ) )";
                    q += ".append( $('<label>', { for: " + i + ", html: '" + a.val() + "'}))"; // end of append
                }
            }
            q += ".buttonset().appendTo('body');"; // end of append
            return "$('<p>').html('" + text +"').appendTo('body');" + q;
        }

        return new Item();
    } ,
    'Time selection' : function(){
        function Item() {
            this.hours = '';
        }

        Item.prototype.display = function() {
            var d = $('<div>', {html: 'How many hours will you stay?'} );
            return d;
        }

        Item.prototype.code = function(){
            var t = "$('<p>').html('How many hours will you stay in office today?').appendTo('body');";
            t += "$('<div>').slider({ min: 0, max: 10, step: 0.5, range: 'min', change : function(event, ui){ alert(ui.value); } }).appendTo('body');"
            return t;
        }

        return new Item();
    } ,
    'Lunch company' : function(){
        function Item() {
            this.hours = '';
        }

        Item.prototype.display = function() {
            var d = $('<div>', {html: 'Would you like lunch company?'} );
            return d;
        }

        Item.prototype.code = function(){
            var t = "$('<p>').html('Today cafeteria is serving Hernekeitto. Would you like some company?').appendTo('body');";
            t += "$('<div>').append( $('<input>', { type: 'radio', name: 'lunch-attendance', id: 'lunch_yes' } ) ).append( $('<label>', { for: 'lunch_yes', html: 'Yes'})).append( $('<input>', { type: 'radio', name: 'lunch-attendance', id: 'lunch_no' } ) ).append( $('<label>', { for: 'lunch_no', html: 'No'})).buttonset().appendTo('body');"
            return t;
        }

        return new Item();
    } 
}