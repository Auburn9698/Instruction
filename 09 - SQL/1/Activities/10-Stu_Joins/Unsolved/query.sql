select * from players;

select * from seasons_stats;


SELECT p.id, p.player, p.height, p.weight, p.college, p.born, s.position, s.tm
FROM players AS p
INNER JOIN seasons_stats as s ON
p.id = s.player_id;

SELECT s.player_id, p.college, s.year, s.position, s.two_point_percentage, s.fg_percentage, s.ft_percentage, s.ts_percentage
FROM seasons_stats AS s
INNER JOIN players as p ON
p.id = s.player_id;

SELECT s.player_id, 
	p.college, 
	s.year, 
	s.position, 
	s.two_point_percentage, 
	s.fg_percentage, 
	s.ft_percentage, 
	s.ts_percentage
FROM players AS p
INNER JOIN seasons_stats as s ON
p.id = s.player_id;

