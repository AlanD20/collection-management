<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;

class ExportLang extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lang:export {locale}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Exports PHP language files to a single json file.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $locale = $this->argument('locale');
        $path = $this->getLangPath();
        $files = array_diff(
            scandir("{$path}/{$locale}"),
            ['..', '.']
        );
        // $outDir = "{$path}/{$locale}.json";
        $res = [];
        foreach ($files as $file) {
            $name = explode('.', $file);
            if ($name[1] !== 'php') {
                continue;
            }

            $filePath = "{$path}/{$locale}/{$file}";
            $data = $this->execPHPFile($filePath);

            $res = array_merge($res, [
                $name[0] => $data,
            ]);
        }
        $outDir = $this->getOutputPath();
        $this->appendToFile($outDir, $res);
    }

    public function getLangPath()
    {
        return app_path('../lang');
    }

    public function getOutputPath()
    {
        $locale = $this->argument('locale');

        return app_path("../resources/src/common/{$locale}.json");
    }

    public function execPHPFile(string $path)
    {
        if (! \file_exists($path)) {
            return;
        }
        // Another way to Execute PHP File
        // $command = ['php', '-r', "print_r(include('{$path}'));"];
        // $process = (new Process($command));
        // $process->run();
        // return $process->getOutput();

        return include $path;
    }

    public function appendToFile(string $path, mixed $data): void
    {
        \file_put_contents($path, \json_encode($data));
    }
}
