// priority: 0

// Put it inside: kubejs/startup_scripts/tools_speedUp.js
// It doenst work if there's Vminus mod installed!

// https://kubejs.com/wiki/tutorials/item-modification
// Tool Defaults
// Tier      level   maxDamage   digSpeed   attackDamage   enchantmentValue
// Wood      0       59          2          0              15
// Stone     1       131         4          1              5
// Iron      2       250         6          2              14
// Diamond   3       1561        8          3              10
// Gold      0       32          12         0              22
// Netherite 4       2031        9          4              15




// level sadly seems to not work
ItemEvents.modification(event => {
  // Wood tools
  event.modify('minecraft:wooden_pickaxe', item => { item.digSpeed = 4 })
  event.modify('minecraft:wooden_axe', item => { item.digSpeed = 4 })
  event.modify('minecraft:wooden_shovel', item => { item.digSpeed = 4 })
  event.modify('minecraft:wooden_hoe', item => { item.digSpeed = 4 })

  // Stone tools
  event.modify('minecraft:stone_pickaxe', item => { item.digSpeed = 6 })
  event.modify('minecraft:stone_axe', item => { item.digSpeed = 6 })
  event.modify('minecraft:stone_shovel', item => { item.digSpeed = 6 })
  event.modify('minecraft:stone_hoe', item => { item.digSpeed = 6 })

  // Iron tools
  event.modify('minecraft:iron_pickaxe', item => { item.digSpeed = 8 })
  event.modify('minecraft:iron_axe', item => { item.digSpeed = 8 })
  event.modify('minecraft:iron_shovel', item => { item.digSpeed = 8 })
  event.modify('minecraft:iron_hoe', item => { item.digSpeed = 8 })

  // Diamond tools
  event.modify('minecraft:diamond_pickaxe', item => { item.digSpeed = 10 })
  event.modify('minecraft:diamond_axe', item => { item.digSpeed = 10 })
  event.modify('minecraft:diamond_shovel', item => { item.digSpeed = 10 })
  event.modify('minecraft:diamond_hoe', item => { item.digSpeed = 10 })

  // Gold tools
  event.modify('minecraft:golden_pickaxe', item => { item.digSpeed = 12 })
  event.modify('minecraft:golden_axe', item => { item.digSpeed = 12 })
  event.modify('minecraft:golden_shovel', item => { item.digSpeed = 12 })
  event.modify('minecraft:golden_hoe', item => { item.digSpeed = 12 })

  // Netherite tools
  event.modify('minecraft:netherite_pickaxe', item => { item.digSpeed = 11 })
  event.modify('minecraft:netherite_axe', item => { item.digSpeed = 11 })
  event.modify('minecraft:netherite_shovel', item => { item.digSpeed = 11 })
  event.modify('minecraft:netherite_hoe', item => { item.digSpeed = 11 })
})

  // Extra tools: example from "Oooh, Pinky!"" mod by JerryLu086
  // event.modify('oooh_pinky:rose_gold_pickaxe', item => { item.digSpeed = 8 })
  // event.modify('oooh_pinky:rose_gold_axe', item => { item.digSpeed = 8 })
  // event.modify('oooh_pinky:rose_gold_shovel', item => { item.digSpeed = 8 })
  // event.modify('oooh_pinky:rose_gold_hoe', item => { item.digSpeed = 8 })
