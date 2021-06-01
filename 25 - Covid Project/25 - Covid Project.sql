SELECT * FROM CovidDeaths

-- Select Data that we are going to be starting with
Select Location, date, total_cases, new_cases, total_deaths, population
From CovidProject..CovidDeaths
Where continent is not null 
order by 1,2

-- Total Cases vs Total Deaths
-- Shows likelihood of dying if you contract covid in your country
Select Location, date, total_cases, total_deaths, (total_deaths/total_cases) * 100
From CovidProject..CovidDeaths
WHERE Location like '%states%'
ORDER BY 1, 2


-- Total Cases vs Population
-- Shows what percentage of population infected with Covid
SELECT Location, date, population, total_cases,  (total_cases/population)*100 as PercentPopulationInfected
FROM CovidProject..CovidDeaths
--WHERE location like '%states%'
ORDER BY 1,2;

SELECT location, population, MAX(total_cases) as HighestInfectionCount, 
MAX(total_cases/population)* 100 as PercentPopulationInfected
FROM CovidProject..CovidDeaths
GROUP BY location, population
ORDER BY PercentPopulationInfected DESC;

-- Showing countries with highest death count per population
SELECT location, MAX(cast(total_deaths as int)) as TotalDeathCount
FROM CovidProject..CovidDeaths
WHERE continent is not null
GROUP BY location
Order by TotalDeathCount DESC

-- Breaking it down by continent 
-- Showing contintents with the highest death count per population
SELECT continent, MAX(cast(total_deaths as int)) as TotalDeathCount
FROM CovidProject..CovidDeaths
WHERE continent is not null
GROUP BY continent
Order by TotalDeathCount DESC

-- Global numbers by continent:
SELECT location, MAX(cast(total_deaths as int)) as TotalDeathCount
FROM CovidProject..CovidDeaths
WHERE continent is null
GROUP BY location
Order by TotalDeathCount DESC

-- GLOBAL NUMBERS
-- By Day:
SELECT date, SUM(new_cases) as total_cases, SUM(cast(new_deaths as float)) as total_deaths, SUM(cast(new_deaths as float))/SUM(New_Cases)*100 as DeathPercentage
From CovidProject..CovidDeaths
--Where location like '%states%'
WHERE continent is not null
GROUP BY date
ORDER BY 1,2

-- Total:
SELECT SUM(new_cases) as total_cases, SUM(cast(new_deaths as float)) as total_deaths, SUM(cast(new_deaths as float))/SUM(New_Cases)*100 as DeathPercentage
From CovidProject..CovidDeaths
--Where location like '%states%'
WHERE continent is not null
--GROUP BY date
ORDER BY 1,2


-- JOINING:

SELECT * 
FROM CovidProject..CovidDeaths AS dea
JOIN CovidProject..CovidVaccinations AS vac
ON dea.location = vac.location
AND dea.date = vac.date

-- Look at total population vs vaccinations:
SELECT dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations
FROM CovidProject..CovidDeaths AS dea
JOIN CovidProject..CovidVaccinations AS vac
	ON dea.location = vac.location
	AND dea.date = vac.date
WHERE dea.continent is not null
order by 1, 2, 3

SELECT dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations,
-- SUM(CONVERT(int, vac.new_vaccinations)) OVER (PARTITION BY dea.location ORDER BY dea.location, dea.date)
	SUM(vac.new_vaccinations) OVER (PARTITION BY dea.location ORDER BY dea.location, dea.date)
	AS RollingPeopleVaccinated
FROM CovidProject..CovidDeaths AS dea
JOIN CovidProject..CovidVaccinations AS vac
	ON dea.location = vac.location
	AND dea.date = vac.date
WHERE dea.continent is not null
order by 2, 3


-- Use a CTE
WITH PopvsVac (Continent, Location, Date, Population, New_Vaccinations, RollingPeopleVaccinated)
as
(SELECT dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations,
SUM(vac.new_vaccinations) OVER (PARTITION BY dea.location ORDER BY dea.location, dea.date)
	AS RollingPeopleVaccinated
FROM CovidProject..CovidDeaths AS dea
JOIN CovidProject..CovidVaccinations AS vac
	ON dea.location = vac.location
	AND dea.date = vac.date
WHERE dea.continent is not null
--order by 2, 3
)
SELECT * , CONVERT(float, RollingPeopleVaccinated)/CONVERT(float, Population)*100
FROM PopvsVac


-- TEMP Table
DROP Table if exists #PercentPopulationVaccinated
CREATE TABLE #PercentPopulationVaccinated
(
Continent nvarchar(255),
Location nvarchar(255),
Date datetime,
Population numeric,
New_vaccinations numeric,
RollingPeopleVaccinated numeric
)
INSERT INTO #PercentPopulationVaccinated

SELECT dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations,
SUM(vac.new_vaccinations) OVER (PARTITION BY dea.location ORDER BY dea.location, dea.date)
	AS RollingPeopleVaccinated
FROM CovidProject..CovidDeaths AS dea
JOIN CovidProject..CovidVaccinations AS vac
	ON dea.location = vac.location
	AND dea.date = vac.date
--WHERE dea.continent is not null
--order by 2, 3

SELECT * , CONVERT(float, RollingPeopleVaccinated)/CONVERT(float, Population)*100
FROM #PercentPopulationVaccinated


-- Creating View to store data for visualizations
CREATE VIEW PercentPopulationVaccinated AS
SELECT dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations,
SUM(vac.new_vaccinations) OVER (PARTITION BY dea.location ORDER BY dea.location, dea.date)
	AS RollingPeopleVaccinated
FROM CovidProject..CovidDeaths AS dea
JOIN CovidProject..CovidVaccinations AS vac
	ON dea.location = vac.location
	AND dea.date = vac.date
WHERE dea.continent is not null
--order by 2, 3

SELECT * FROM PercentPopulationVaccinated
