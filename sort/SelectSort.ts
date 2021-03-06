
export default function SelectSort(arr: Number[]) {
    var minIndex = 0, t = arr[0];
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        t = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = t;
    }
}
