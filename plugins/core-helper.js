import Vue from 'vue'

Vue.prototype.$core = {

    scrollTop: () => {
        $('.main-panel').scrollTop(0);
    },

    formatReal: (valor) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    },

    formBind: () => {

        $('.main-panel').scrollTop(0);

        let table = $('.datatable');
        let length = table.data('size');
        let datatable = table.DataTable({
            language: {
                url: '../assets/js/plugins/jquery.dataTables.ptbr.json'
            },
            pageLength: length != null ? length : 50,
            responsive: true,
            aaSorting: []
        });
        datatable.on('draw', function() {
            $('.dataTables_length').remove();
            $('.dataTables_filter').parent().removeClass('col-md-6');
            $('.dataTables_filter').parent().addClass('col-md-12');
            $('.dataTables_filter input').attr('placeholder', 'Pesquisar...');
            $('.dataTables_filter input').css('background-color', 'hsla(0, 0%, 87%, .5)');
            $('.dataTables_filter input').css('border', 'medium none');

            //<div class="input-group no-border"><input type="text" placeholder="Pesquisar..." class="form-control"> <div class="input-group-append"><div class="input-group-text"><i class="nc-icon nc-zoom-split"></i></div></div></div>
        });

        $(".form-control").on("paste", function(e) {
            e.preventDefault();
        });
    },

    listHelper: {

        sortDictionaryByKey: (dictionary) => {
            return Object.entries(dictionary)
                .sort()
                .reduce(
                    (_sortedObj, [k, v]) => ({
                        ..._sortedObj,
                        [k]: v
                    }), {}
                );
        },

        sortDictionaryByValue: (obj) => {
            var sortable = [];
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                    sortable.push([key, obj[key]]); // each item is an array in format [key, value]

                // sort items by value
            sortable.sort(function(a, b) {
                return a[1] - b[1]; // compare numbers
            });
            return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]            
        }
    }

}