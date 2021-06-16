Site is accessible at `9ps.github.io`

# The story:

The dual focus of this visualisation was the result of indecision between choosing the topic surrounding "diplomatic relations", and of the rhetoric of "victimisation". These focuses alone proved difficult, lacking strong data or motivations in isolation. The reframing into a power/powerless paradigm was due to early wireframing and rapid replication of graphs on excel, where initial user feedback guided me to the stronger direction. Together, they provided intresting insights into differing performances of the same "Outsider" paradigm, which I found nice. 

The narrative seeks to outline how Donald Trump's tweets (about international and impeachment issues) support his appearance of being an "Outsider", and the paradoxical manifestations this has (being the height of power, while feigning powerlessness). The first section sought to explore how power is projected internationally, with the later showing how trump self-victimises and deflects from investigations of corruption. I intended on showing the effectiveness, impact, and hypocrisy of these rhetoric's. This narrative was constructed to linearly progress through the international, to the domestic, such that the reader can at the end understand the overall nature of these areas.


# Design Decisions:

Colour was used to provide continuity, frame discussion and structure the narrative. I made efforts to make the "Outsider" "Power" and "Powerless" paradigm distinct. This was reinforced by colour, as seen in the title text and the underline motif used throughout. This enabled important text to appear more prominent, and provided a means to connect content to the overall argument it was representing.

A washed-tan background was paired with dark grey text, with a contrast ratio of 13.33:1, passing all WCAG guidelines, while still being less intense than a conventional white on black. This was paired with graphs and modals with white backgrounds, used to house quotes and stats. These modals leveaged the equity of an abstracted tweet screenshot, its salient features was useful in drawing reader attention to data. For the stat modals, the statistic was made prominent through the manipulation of size, stroke, and colour.

# User Feedback:

Semi-structured interviews, embedded with qualitative usability tasks formed the basis of user feedback. Users were tasked to identify what different visualisations meant to them, and providing an overall assessment of what they understood of the narrative. These questions, paired with general feedback from users when going through the website, was important for the refinement and refactoring of content.

Users responded and revealed the need to explain the graphs more, stressing the a stronger labelling of graphs components. Additionally, users found it difficult to distinguish between previous colours (of a more restricted purple/pink gradient), leading to the current selection. The difficulty of users interpreting a graph comparing Trump tweet counts per year of "Witch Hunts", and the growth of its use in the Google nGram Database, led to its refactoring as a stat modal. I was pleased to find that users found the site otherwise quite legible, with the exception of highlighted text that was later revised to be underlines

# Data:

A3.CSV
To depict diplomatic tweets, for both Trump and Obama I: 
1. made a list of all countries, and alternate names
2. removed tweets that werent apart of any of the countries (=IF(ISNUMBER(SEARCH(COUNTRY,TWEET)),1,0)), performing a sum to see
3. removed countries that didnt have more than 50 tweets about it
4. removed mentions of "indiana", "new mexico", and [thanksgiving] "turkey"

VIS 1 & 2.
1. prepared data on excel, based on A3.CSV, making groupings based on 0.2 intervals of sentiment
2. this was then visualized as a barchart

VIS 3.
1. This was originally meant to contain tweets from both Obama and Trump, but displaying different colours for the two proved difficult, so it was revised to just show trump (not ideal)
2. Pulls data from A3.CSV
3. This featured a dropdown that allowed for readers to examine the different sentiments of tweets overtime

VIS 4.
1. prepared data on excel, making yearly groupings for each mention of Obamagate, Watergate, and Spygate
2. displayed as a stacked barchart, which could support insights into the -gate-naming-complex's frequency and dispersed use

other stats:
* increase in tweet data from (Budhwani & Sun, 2020)
* pulled data from google ngram for "Witchunts mentions", for the American English corpus
