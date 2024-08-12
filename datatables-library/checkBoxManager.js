(function($) {
    $.fn.checkboxManager = function(options) {
        const settings = $.extend({
            selectAllButton: null,
            rangeButton: null,
            startRowInput: null,
            endRowInput: null
        }, options);

        const $table = this;
        const $selectAllButton = $(settings.selectAllButton);
        const $rangeButton = $(settings.rangeButton);
        const $startRowInput = $(settings.startRowInput);
        const $endRowInput = $(settings.endRowInput);

        function updateButtonText(isAllSelected) {
            $selectAllButton.text(isAllSelected ? '전체선택해제' : '전체선택');
        }

        function toggleSelectAll() {
            const isAllSelected = $selectAllButton.text() === '전체선택';
            $table.find('.select-checkbox').prop('checked', isAllSelected);
            updateButtonText(isAllSelected);
        }

        function selectRange() {
            const startRow = parseInt($startRowInput.val(), 10) - 1;
            const endRow = parseInt($endRowInput.val(), 10) - 1;

            if (isNaN(startRow) || isNaN(endRow) || startRow < 0 || endRow < 0 || startRow > endRow) {
                alert('Please enter valid row numbers.');
                return;
            }

            $table.find('tbody tr').each(function(rowIdx) {
                $(this).find('.select-checkbox').prop('checked', rowIdx >= startRow && rowIdx <= endRow);
            });

            const anyChecked = $table.find('.select-checkbox:checked').length > 0;
            updateButtonText(anyChecked);
        }

        $selectAllButton.on('click', toggleSelectAll);
        $rangeButton.on('click', selectRange);

        return this;
    };
})(jQuery);
