        const colors = [
            '#FF0000', '#FF4500', '#FFD700',
            '#FFFF00', '#90EE90', '#98FB98',
            '#008000', '#00CED1', '#00FFFF',
            '#87CEEB', '#0000FF', '#00008B',
            '#000080', '#4B0082', '#800080',
            '#FF69B4', '#FFB6C1', '#C0C0C0',
            '#808080', '#000000', '#FFFFFF'
        ];

        let selectedColor = colors[0];
        let isDrawing = false;

        const colorPalette = document.getElementById('colorPalette');
        colors.forEach((color, index) => {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;
            if (index === 0) colorBox.classList.add('selected');
            
            colorBox.addEventListener('click', () => {
                document.querySelectorAll('.color-box').forEach(box => {
                    box.classList.remove('selected');
                });
                colorBox.classList.add('selected');
                selectedColor = color;
            });
            
            colorPalette.appendChild(colorBox);
        });

        const gridContainer = document.getElementById('gridContainer');
        const rows = 25;
        const cols = 50;
        
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 30px)`;

        for (let i = 0; i < rows * cols; i++) {
            const square = document.createElement('div');
            square.className = 'grid-square';
            
            square.addEventListener('mousedown', (e) => {
                e.preventDefault();
                isDrawing = true;
                square.style.backgroundColor = selectedColor;
            });

            square.addEventListener('mouseenter', () => {
                if (isDrawing) {
                    square.style.backgroundColor = selectedColor;
                }
            });

            square.addEventListener('touchstart', (e) => {
                e.preventDefault();
                square.style.backgroundColor = selectedColor;
            });

            square.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const element = document.elementFromPoint(touch.clientX, touch.clientY);
                if (element && element.classList.contains('grid-square')) {
                    element.style.backgroundColor = selectedColor;
                }
            });

            gridContainer.appendChild(square);
        }

        document.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        document.getElementById('clearBtn').addEventListener('click', () => {
            document.querySelectorAll('.grid-square').forEach(square => {
                square.style.backgroundColor = 'white';
            });
        });