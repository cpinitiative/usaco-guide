for i in *.cpp; do
    # [ -f "$i" ] || continue
    # echo $i
    g++ -Wfatal-errors -w -std=c++17 "$i"
    echo $i "->" $? 
done