#include <stdio.h>
#define MAX 10

int top = -1;
char stack[MAX];

void push(char x){
    if(top == MAX - 1){
        printf("Stack is full\n");
    }
    else{
        top++;
        stack[top] = x;
        printf("Pushed %c\n",x);
    }
}
char pop(){
    if(top < 0){
        printf("Stack empty\n");
        return '\0';
    }
    char c = stack[top];
    top--;
    return c;
}
void peek(){
    if(top == -1){
        printf("Nothing at top\n");
    } else {
        printf("Top element: %c\n",stack[top]);
    }
}
void display() {
    int i;
    printf("Stack elements are:\n");
    for(i = top; i >= 0; i--){
        printf("%c ", stack[i]);
    }
    printf("\n");
}
int main(){
    push('A');
    push('n');
    push('u');
    push('s');
    push('h');
    push('k');
    push('a');

    display();

    printf("Pop: %c\n", pop());
    printf("Pop: %c\n", pop());
    peek();
    display();

    return 0;
}