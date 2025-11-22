
import { CompetencyGroup } from './types';

// Column 1 Data
export const LEFT_COLUMN_DATA: CompetencyGroup[] = [
  {
    category: "Eyesight test",
    items: [
      { 
        id: "eyesight", 
        name: "Eyesight test", 
        highwayCode: "Rule 92",
        description: "Read a vehicle number plate from a distance of 20 metres."
      }
    ]
  },
  {
    category: "Manoeuvres",
    items: [
      { 
        id: "manoeuvre-control", 
        name: "Control", 
        highwayCode: "Rule 200-203",
        description: "Move slowly, smoothly and under control (use of clutch/brake)."
      },
      { 
        id: "manoeuvre-observation", 
        name: "Observation", 
        highwayCode: "Rule 202",
        description: "Effective all-round observation before and during the manoeuvre."
      },
    ]
  },
  {
    category: "Show me / Tell me",
    items: [
      { 
        id: "show-me-tell-me", 
        name: "Show me / Tell me", 
        highwayCode: "Vehicle Safety Questions",
        description: "Answer vehicle safety questions correctly."
      }
    ]
  },
  {
    category: "Controlled stop",
    items: [
      { 
        id: "controlled-stop", 
        name: "Controlled stop", 
        highwayCode: "Rule 117-126",
        description: "Stop promptly and under control in a safe place."
      }
    ]
  },
  {
    category: "Control",
    items: [
      { 
        id: "control-accelerator", 
        name: "Accelerator", 
        highwayCode: "Rule 144",
        description: "Smooth operation, appropriate for the road and traffic conditions."
      },
      { 
        id: "control-clutch", 
        name: "Clutch", 
        highwayCode: "Rule 144",
        description: "Smooth operation, no coasting, good control."
      },
      { 
        id: "control-gears", 
        name: "Gears", 
        highwayCode: "Rule 122",
        description: "Select the correct gear for the road speed and traffic conditions."
      },
      { 
        id: "control-footbrake", 
        name: "Footbrake", 
        highwayCode: "Rule 117-126",
        description: "Progressive and smooth braking. Use mirrors before braking."
      },
      { 
        id: "control-parking-brake", 
        name: "Parking brake", 
        highwayCode: "Rule 239",
        description: "Apply firmly to prevent rolling. Remove fully before moving."
      },
      { 
        id: "control-steering", 
        name: "Steering", 
        highwayCode: "Rule 160",
        description: "Smooth, accurate control. Keep hands on the wheel."
      },
      { 
        id: "control-precautions", 
        name: "Precautions", 
        highwayCode: "Rule 97",
        description: "Ensure doors are closed, seat/mirrors adjusted, seatbelt on."
      },
      { 
        id: "control-ancillary", 
        name: "Ancillary controls", 
        highwayCode: "Rule 113-116",
        description: "Use wipers, lights, heaters, etc., when necessary and safely."
      },
    ]
  }
];

// Column 2 Data
export const MIDDLE_COLUMN_DATA: CompetencyGroup[] = [
  {
    category: "Move off",
    items: [
      { 
        id: "move-off-safety", 
        name: "Safety", 
        highwayCode: "Rule 159",
        description: "Check blind spots and mirrors before moving off."
      },
      { 
        id: "move-off-control", 
        name: "Control", 
        highwayCode: "Rule 159-161",
        description: "Move off smoothly without rolling back or stalling."
      },
    ]
  },
  {
    category: "Use of mirrors",
    items: [
      { 
        id: "mirrors-signalling", 
        name: "Signalling", 
        highwayCode: "Rule 161",
        description: "Check mirrors before signalling."
      },
      { 
        id: "mirrors-change-direction", 
        name: "Change direction", 
        highwayCode: "Rule 159-161",
        description: "Check mirrors before changing direction or lane."
      },
      { 
        id: "mirrors-change-speed", 
        name: "Change speed", 
        highwayCode: "Rule 159-161",
        description: "Check mirrors before slowing down or stopping."
      },
    ]
  },
  {
    category: "Signals",
    items: [
      { 
        id: "signals-necessary", 
        name: "Necessary", 
        highwayCode: "Rule 103",
        description: "Signal to warn other road users of your intentions."
      },
      { 
        id: "signals-correctly", 
        name: "Correctly", 
        highwayCode: "Rule 103-106",
        description: "Signals must not be misleading. Cancel after use."
      },
      { 
        id: "signals-timed", 
        name: "Timed", 
        highwayCode: "Rule 103-106",
        description: "Give signals in plenty of time."
      },
    ]
  },
  {
    category: "Junctions",
    items: [
      { 
        id: "junctions-approach-speed", 
        name: "Approach speed", 
        highwayCode: "Rule 170-172",
        description: "Approach at a speed that allows you to stop safely if needed."
      },
      { 
        id: "junctions-observation", 
        name: "Observation", 
        highwayCode: "Rule 170-172",
        description: "Effective observation before emerging."
      },
      { 
        id: "junctions-turning-right", 
        name: "Turning right", 
        highwayCode: "Rule 179-181",
        description: "Position correctly, give way to oncoming traffic."
      },
      { 
        id: "junctions-turning-left", 
        name: "Turning left", 
        highwayCode: "Rule 182-183",
        description: "Keep to the left, watch for cyclists/pedestrians."
      },
      { 
        id: "junctions-cutting-corners", 
        name: "Cutting corners", 
        highwayCode: "Rule 181",
        description: "Avoid cutting corners when turning right."
      },
    ]
  },
  {
    category: "Judgement",
    items: [
      { 
        id: "judgement-overtaking", 
        name: "Overtaking", 
        highwayCode: "Rule 162-169",
        description: "Only overtake when safe and legal to do so."
      },
      { 
        id: "judgement-meeting", 
        name: "Meeting", 
        highwayCode: "Rule 155-156",
        description: "Give way to oncoming traffic where necessary. Adequate clearance."
      },
      { 
        id: "judgement-crossing", 
        name: "Crossing", 
        highwayCode: "Rule 170-183",
        description: "Safe judgement of gaps in traffic when crossing."
      },
    ]
  }
];

// Column 3 Data
export const RIGHT_COLUMN_DATA: CompetencyGroup[] = [
  {
    category: "Positioning",
    items: [
      { 
        id: "positioning-normal", 
        name: "Normal driving", 
        highwayCode: "Rule 135-138",
        description: "Drive in the correct position for the road (usually left)."
      },
      { 
        id: "positioning-lane", 
        name: "Lane discipline", 
        highwayCode: "Rule 133-143",
        description: "Stay within lane markings. Select correct lane for destination."
      },
    ]
  },
  {
    category: "General",
    noTitle: true,
    items: [
      { 
        id: "pedestrian-crossings", 
        name: "Pedestrian crossings", 
        highwayCode: "Rule 191-199",
        description: "Give way to pedestrians. Do not park/stop on zig-zags."
      },
      { 
        id: "position-normal-stop", 
        name: "Position / normal stop", 
        highwayCode: "Rule 239-252",
        description: "Stop close to the kerb in a safe, legal place."
      },
      { 
        id: "awareness-planning", 
        name: "Awareness planning", 
        highwayCode: "Rule 144-146",
        description: "Anticipate hazards and actions of others early."
      },
      { 
        id: "clearance", 
        name: "Clearance", 
        highwayCode: "Rule 163",
        description: "Allow plenty of room when passing parked cars/obstructions."
      },
      { 
        id: "following-distance", 
        name: "Following distance", 
        highwayCode: "Rule 126",
        description: "Leave a 2-second gap (dry) or 4-second gap (wet)."
      },
      { 
        id: "use-of-speed", 
        name: "Use of speed", 
        highwayCode: "Rule 124-125",
        description: "Adjust speed for road, traffic, and weather conditions."
      },
    ]
  },
  {
    category: "Progress",
    items: [
      { 
        id: "progress-appropriate", 
        name: "Appropriate speed", 
        highwayCode: "Rule 146",
        description: "Do not hold up traffic unnecessarily. Drive up to the limit if safe."
      },
      { 
        id: "progress-undue-hesitation", 
        name: "Undue hesitation", 
        highwayCode: "Rule 146",
        description: "Proceed when it is safe to do so. Don't wait unnecessarily."
      },
    ]
  },
  {
    category: "Response to signs / signals",
    items: [
      { 
        id: "signs-traffic-signs", 
        name: "Traffic signs", 
        highwayCode: "Highway Code Signs",
        description: "Obey speed limits, stop signs, and other road signs."
      },
      { 
        id: "signs-road-markings", 
        name: "Road markings", 
        highwayCode: "Highway Code Markings",
        description: "Obey road markings (e.g., stop lines, bus lanes)."
      },
      { 
        id: "signs-traffic-lights", 
        name: "Traffic lights", 
        highwayCode: "Rule 109, 175-176",
        description: "Stop on red. Do not cross stop line on amber unless unsafe."
      },
      { 
        id: "signs-traffic-controllers", 
        name: "Traffic controllers", 
        highwayCode: "Rule 107-108",
        description: "Obey signals from police, traffic officers, or school crossing patrols."
      },
      { 
        id: "signs-other-road-users", 
        name: "Other road users", 
        highwayCode: "Rule 144, 204-225",
        description: "React safely to other road users (cyclists, horses, emergency vehicles)."
      },
    ]
  }
];

// Helper to get all groups for initialization/results
export const ALL_GROUPS = [
  ...LEFT_COLUMN_DATA,
  ...MIDDLE_COLUMN_DATA,
  ...RIGHT_COLUMN_DATA
];
