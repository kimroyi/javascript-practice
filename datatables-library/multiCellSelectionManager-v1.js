/**
 * @description 클래스 사용 방식
 */
class MultiCellSelectionManager {
    constructor(tableSelector) {
        this.$table = $(tableSelector);
        this.table = this.$table.DataTable(); // 이미 초기화된 DataTable 인스턴스를 참조
        this.isMouseDown = false;
        this.startCell = null;

        // 초기화 메서드 호출
        this.init();
    }

    init() {
        // 마우스 이벤트 바인딩
        this.$table.on('mousedown', 'td', (e) => this.handleMouseDown(e));
        this.$table.on('mouseover', 'td', (e) => this.handleMouseOver(e));
        this.$table.on('mouseup', () => this.handleMouseUp());

        // 마우스가 테이블 외부에서 떼어졌을 때 이벤트 처리
        $(document).on('mouseup', () => this.handleMouseUp());

        // 복사 기능을 위한 키보드 이벤트 바인딩
        $(document).on('keydown', (e) => this.handleKeyDown(e));
    }

    handleMouseDown(e) {
        e.preventDefault();
        this.isMouseDown = true;
        this.startCell = e.target;
        this.clearSelection(); // 이전 선택 해제
        $(e.target).addClass('selected-cell');
        return false; // 텍스트 선택 방지
    }

    handleMouseOver(e) {
        if (this.isMouseDown) {
            this.selectRange(this.startCell, e.target);
        }
    }

    handleMouseUp() {
        this.isMouseDown = false;
    }

    clearSelection() {
        $(this.table.table().body()).find('td').removeClass('selected-cell');
    }

    selectRange(startCell, endCell) {
        this.clearSelection();

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
                $(this.table.table().body()).find('tr').eq(row).find('td').eq(col).addClass('selected-cell');
            }
        }
    }

    handleKeyDown(e) {
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            this.copySelectedCells();
        }
    }

    copySelectedCells() {
        let selectedData = [];
        const rows = $(this.table.table().body()).find('tr').map(function () {
            const rowData = $(this).find('.selected-cell').map(function () {
                return $(this).text();
            }).get().join('\t');
            return rowData;
        }).get();

        selectedData = rows.filter(row => row.trim() !== '').join('\n'); // 행을 줄바꿈으로 구분

        navigator.clipboard.writeText(selectedData)
            .then(() => alert('Copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));
    }
}

// Usage Example
const manager = new MultiCellSelectionManager('#example');