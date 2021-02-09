def on_button_pressed_a():
    global dice, num_6
    dice = randint(1, 6)
    basic.show_number(dice)
    if dice == 6:
        num_6 += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("% 6 =")
    basic.show_number(num_6 / 10)
input.on_button_pressed(Button.B, on_button_pressed_b)

dice = 0
num_6 = 0
num_6 = 0