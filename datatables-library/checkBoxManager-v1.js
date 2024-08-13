/**
 * @description 클래스 사용 방식
 */
class CheckboxManager {
    constructor(options) {
        // 기본 설정
        this.defaults = {
            tableSelector: null,
            selectAllButton: null,
            rangeButton: null,
            startRowInput: null,
            endRowInput: null
        };
        
        // 사용자 옵션과 기본 설정 병합
        this.settings = Object.assign({}, this.defaults, options);

        // jQuery 객체 초기화
        this.$table = $(this.settings.tableSelector);
        this.$selectAllButton = $(this.settings.selectAllButton);
        this.$rangeButton = $(this.settings.rangeButton);
        this.$startRowInput = $(this.settings.startRowInput);
        this.$endRowInput = $(this.settings.endRowInput);

        // 이벤트 바인딩
        this.init();
    }

    init() {
        this.$selectAllButton.on('click', () => this.toggleSelectAll());
        this.$rangeButton.on('click', () => this.selectRange());
    }

    toggleSelectAll() {
        const isAllSelected = this.$selectAllButton.text() === 'Select All';
        this.$table.find('.select-checkbox').prop('checked', isAllSelected);
        this.$selectAllButton.text(isAllSelected ? 'Deselect All' : 'Select All');
    }

    selectRange() {
        const startRow = parseInt(this.$startRowInput.val(), 10) - 1;
        const endRow = parseInt(this.$endRowInput.val(), 10) - 1;

        if (isNaN(startRow) || isNaN(endRow) || startRow < 0 || endRow < 0 || startRow > endRow) {
            alert('Please enter valid row numbers.');
            return;
        }

        this.$table.find('tbody tr').each((rowIdx, row) => {
            $(row).find('.select-checkbox').prop('checked', rowIdx >= startRow && rowIdx <= endRow);
        });

        const anyChecked = this.$table.find('.select-checkbox:checked').length > 0;
        this.$selectAllButton.text(anyChecked ? 'Deselect All' : 'Select All');
    }
}

// 사용 예
const checkboxManager = new CheckboxManager({
    tableSelector: '#example',
    selectAllButton: '#toggleSelect',
    rangeButton: '#selectRange',
    startRowInput: '#startRow',
    endRowInput: '#endRow'
});