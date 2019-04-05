<?= implode("\n", array_map(function ($index) {
    return '<script src="' . $index . '" type="text/javascript"></script>';
}, $srcScript)) ?>
<script type="text/javascript">
    $(document).ready(function () {
        App.init();
        OB.helper.URL = '<?= base_url(); ?>';
        OB.event();
        Parsley.addMessages('fa', {
            defaultMessage: "مقدار وارد شده نا معتبر است.",
            type: {
                email: "ایمیل وارد شده معتبر نیست.",
                url: "آدرس وارد شده معتبر نیست.",
                number: "عدد وارد شده صحیح نیست.",
                integer: "عدد وارد شده صحیح نیست.",
                digits: "عدد وارد شده صحیح نیست.",
                alphanum: "عدد وارد شده صحیح نیست."
            },
            notblank: "این مقدار نباید خالی باشد.",
            required: "این مقدار نباید خالی باشد.",
            pattern: "مقدار وارد شده صحیح نیست.",
            min: "این مقدار باید بزرگتر از %s باشد.",
            max: "این مقدار باید کوچکتر از %s باشد.",
            range: "این مقدار باید بین %s و %s باشد.",
            minlength: "مقدار بیش از حد کوتاه است.",
            maxlength: "مقدار بیش از حد بلند است.",
            length: "طول رشته وارد شده معتبر نیست.",
            mincheck: "مقدار انتخاب شده باید بزرگتر از %s باشد.",
            maxcheck: "مقدار انتخاب شده باید کوچکتر از %s باشد.",
            check: "مقدار انتخاب شده باید بین %s و %s باشد.",
            equalto: "این مقدار برابر نیست."
        }).setLocale('fa');
        <?= (!empty($script) ? "\n" . implode("\n", $script) : '') ?>
    });
</script>
</body>
</html>