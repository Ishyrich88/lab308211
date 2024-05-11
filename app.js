const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const spacePerPlant = 0.8; // Corrected variable name
const initialPlant = 20;
const spaceMaxCapacity = area / spacePerPlant;

function plantControl(weeks) {
  try {
    // Part 1: Original Functionality
    const plantWeeklyGrowth = initialPlant * Math.pow(2, weeks); // Corrected the assignment operator from = to *
    if (plantWeeklyGrowth > spaceMaxCapacity * 0.8) {
      console.log(`Week ${weeks}: Pruned`);
    } else if (
      plantWeeklyGrowth >= spaceMaxCapacity * 0.5 &&
      plantWeeklyGrowth <= spaceMaxCapacity * 0.8
    ) {
      console.log(`Week ${weeks}: Monitored.`);
    } else {
      console.log(`Week ${weeks}: Planted`);
    }
    
    // Part 2: Additional Space Calculation and Garden Expansion
    let additionalSpace = initialPlant * Math.pow(2, weeks) * spacePerPlant - area;
    console.log(`Additional space required after ${weeks} weeks for ${initialPlant} plants: ${additionalSpace} units`);
    let expandedArea = area + additionalSpace;
    let expandedRadius = Math.sqrt(expandedArea / PI);
    console.log(`Radius of the expanded garden: ${expandedRadius} units`);
  } catch (error) {
    // Part 3: Error Handling
    console.error("Error:", error.message);
  }
}

plantControl(1);
plantControl(2);
plantControl(3);
plantControl(10); // part 2









