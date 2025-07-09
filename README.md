# 🎮 Radio Tug-of-War for BBC micro\:bit

A **fast-paced competitive button-mashing game** powered entirely by **radio signals** between two micro\:bits!

## 🚀 What is this?

This is a **head-to-head tug-of-war game** played on BBC micro\:bits. Each player **spams the A button** to pull the dot to their side. First one to pull it all the way wins.

### 🧠 Highlights

* **No wires, no extra parts** — Just 2 micro\:bits and this `.hex` file
* **Radio-powered communication** to sync both players
* **Real-time LED dot movement**
* **Reset anytime** with the B button
* **Works with both micro\:bit v1.5 and v2.21**

---

## 🕹️ How to Play

1. Download the latest `.hex` file from [Releases](#)
2. Plug in **both** micro\:bits to your computer
3. Drag and drop the `.hex` file into the **root directory** of both micro\:bits
4. Wait for flashing to stop — both will show a dot on the screen
5. **Mash the A button** as fast as you can

   * Every 5 presses = 1 LED move
   * First to move the dot fully to their side wins
6. Press **B** on either device to reset the game!

---

## 📡 How Far Can The Radio Reach?

| Environment         | Range Estimate           |
| ------------------- | ------------------------ |
| Indoors (walls etc) | \~10 to 20 meters        |
| Outdoors (clear)    | \~50 to 70 meters        |
| Perfect conditions  | \~100 meters (max range) |

### 💡 Tips to Improve Range:

* Avoid interference from other devices (WiFi, Bluetooth, etc.)
* Test in open spaces for better performance
* Increase transmit power with:

```python
radio.config(power=7)  # Max power
```

You can even write a **signal test program** to check your range across the school or neighborhood. LET THE CHAOS BEGIN.

---

## 📦 Download

[👉 Get the latest `.hex` file here](#)

---

This is the perfect combo of **coding, physical gameplay, and chaotic competition**. Play it at school, with your siblings, or at a summer camp tech fair.

**Now go mash those buttons and dominate the dot!**
