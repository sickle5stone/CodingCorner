@echo on
set exercism="C:\Users\aispa\Exercism\*.*"
set destination="D:\Coding\current_projects\CodingAlgorithms\DailyCoding\Exercism"

echo Moving Code from %exercism% to %destination%
move %exercism% %destination%