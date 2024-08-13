(function($) {
    // Define the function to initialize multi-cell selection and copy functionality
    $.fn.multiCellSelectionManager = function() {
        const table = this.DataTable(); // Initialize DataTables on the current element

        let isMouseDown = false;
        let startCell = null;

        this.on('mousedown', 'td', function(e) {
            e.preventDefault();
            isMouseDown = true;
            startCell = this;
            clearSelection();  // Clear previous selections
            $(this).addClass('selected-cell');
            return false; // prevent text selection
        }).on('mouseover', 'td', function(e) {
            if (isMouseDown) {
                selectRange(startCell, this);
            }
        }).on('mouseup', function() {
            isMouseDown = false;
        });

        $(document).mouseup(function() {
            isMouseDown = false;
        });

        function clearSelection() {
            $(table.table().body()).find('td').removeClass('selected-cell');
        }

        function selectRange(startCell, endCell) {
            clearSelection();

            const start = $(startCell).index();
            const end = $(endCell).index();
            const startRow = $(startCell).parent().index();
            const endRow = $(endCell).parent().index();

            const rowStart = Math.min(startRow, endRow);
            const rowEnd = Math.max(startRow, endRow);
            const colStart = Math.min(start, end);
            const colEnd = Math.max(start, end);

            for (let row = rowStart; row <= rowEnd; row++) {
                for (let col = colStart; col <= colEnd; col++) {
                    $(table.table().body()).find('tr').eq(row).find('td').eq(col).addClass('selected-cell');
                }
            }
        }

        $(document).on('keydown', function(e) {
            if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                copySelectedCells();
            }
        });

        function copySelectedCells() {
            let selectedData = [];
            const rows = $(table.table().body()).find('tr').map(function() {
                const rowData = $(this).find('.selected-cell').map(function() {
                    return $(this).text();
                }).get().join('\t');
                return rowData;
            }).get();

            selectedData = rows.filter(row => row.trim() !== '').join('\n'); // Separate rows by new lines

            navigator.clipboard.writeText(selectedData)
                .then(() => alert('Copied to clipboard!'))
                .catch(err => console.error('Failed to copy:', err));
        }

        return this; // Allow chaining
    };
})(jQuery);
